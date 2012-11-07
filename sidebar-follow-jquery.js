/**
 * @author: mg12 [http://www.neoease.com/]
 * @update: 2012/11/01
 */

SidebarFollow = function() {

	this.config = {
		element: null, // 处理的节点
		prevElement: null, // 上一个节点
		distanceToTop: 0 // 节点上边到页面顶部的距离
	};

	this.cache = {
		originalToTop: 0 // 原本到页面顶部的距离
	}
};

SidebarFollow.prototype = {

	init: function(config) {
		this.config = config || this.config;
		var _self = this;
		var element = jQuery(_self.config.element);
		var prevElement = jQuery(_self.config.prevElement);

		// 如果没有找到节点, 不进行处理
		if(element.length <= 0) {
			return;
		}

		// 滚动屏幕
		jQuery(window).scroll(function() {
			_self._scrollScreen({element:element, prevElement:prevElement, _self:_self});
		});

		// 改变屏幕尺寸
		jQuery(window).resize(function() {
			_self._scrollScreen({element:element, prevElement:prevElement, _self:_self});
		});
	},

	/**
	 * 修改节点位置
	 */
	_scrollScreen: function(args) {
		var _self = args._self;
		var element = args.element;
		var prevElement = args.prevElement;

		var elementToTop = element.offset().top - _self.config.distanceToTop;
		var elementToPrev = prevElement.offset().top + prevElement.outerHeight();

		// 当节点进入跟随区域, 跟随滚动
		if(jQuery(document).scrollTop() > elementToTop) {
			_self.cache.originalToTop = elementToTop;
			element.css({
				top: _self.config.distanceToTop + 'px',
				position: 'fixed'
			});

		// 否则回到原位
		} else if(_self.cache.originalToTop > elementToTop || elementToPrev > elementToTop) {
			element.css({
				position: 'static'
			});
		}
	}
};
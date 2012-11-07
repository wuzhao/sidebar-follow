/**
 * @author: mg12 [http://www.neoease.com/]
 * @update: 2012/11/05
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
		var element = document.getElementById(_self.config.element);
		var prevElement =  document.getElementById(_self.config.prevElement);

		// 如果没有找到节点, 不进行处理
		if(!element) {
			return;
		}

		// 滚动屏幕
		_self._addListener(window, 'scroll', function() {
			_self._scrollScreen({element:element, prevElement:prevElement, _self:_self});
		});

		// 改变屏幕尺寸
		_self._addListener(window, 'resize', function() {
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

		var elementToTop = 0;
		if(element.style.position === 'fixed') {
			elementToTop = _self._getScrollY();
		} else {
			elementToTop = _self._getCumulativeOffset(element).top - _self.config.distanceToTop;
		}
		var elementToPrev = _self._getCumulativeOffset(prevElement).top + _self._getVisibleSize(prevElement).height;

		// 当节点进入跟随区域, 跟随滚动
		if(_self._getScrollY() > elementToTop) {
			_self.cache.originalToTop = elementToTop;
			element.style.top = _self.config.distanceToTop + 'px';
			element.style.position = 'fixed';

		// 否则回到原位
		} else if(_self.cache.originalToTop > elementToTop || elementToPrev > elementToTop) {
			element.style.position = 'static';
		}
	},

	/**
	 * 获取累计偏移量, 即元素到页面左上角的横行和纵向距离
	 */
	_getCumulativeOffset: function(element) {
		var offset = {
			left:0,
			top:0
		};

		do {
			offset.left += element.offsetLeft || 0;
			offset.top += element.offsetTop  || 0;
			element = element.offsetParent;
		} while (element);

		return offset;
	},

	/**
	 * 获取元素可见尺寸 (包括边线和滚动条)
	 */
	_getVisibleSize: function(element) {
		var dimension = {
			width:0,
			height:0
		};

		dimension.width = element.offsetWidth;
		dimension.height = element.offsetHeight;

		return dimension;
	},

	/**
	 * 获得滚动条纵向距离
	 */
	_getScrollY: function() {
		if(typeof window.pageYOffset != 'undefined') {
			return window.pageYOffset;
		}

		if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
			return document.documentElement.scrollTop;
		}

		return document.body.scrollTop;
	},

	/**
	 * 添加监听事件
	 */
	_addListener: function(node, type, listener) {
		if(node.addEventListener) {
			node.addEventListener(type, listener, false);
			return true;
		} else if(node.attachEvent) {
			node['e' + type + listener] = listener;
			node[type + listener] = function() {
				node['e' + type + listener](window.event);
			};
			node.attachEvent('on' + type, node[type + listener]);
			return true;
		}
		return false;
	}
};
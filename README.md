Sidebar Follow
==============

当页面滚动到跟随区域下方，跟随区域将固定在窗口上。适用于所有网站侧边栏。

[相关文章和 DEMO](http://www.neoease.com/sidebar-follow-scrolling-section/)

Usage
-----

### 原生 JavaScript

在页面底部 `</body>` 之前加入代码如下:

	<script src="sidebar-follow.js"></script>
	<script>
	/* <![CDATA[ */
	(new SidebarFollow()).init({
		element: 'sidebar-follow',
		distanceToTop: 15
	});
	/* ]]> */
	</script>

### jQuery

在页面底部 `</body>` 之前加入代码如下:

	<script src="jquery.js"></script> <!-- 如果已在网站的其他地方引入 jQuery, 请不要在次引入 -->
	<script src="sidebar-follow-jquery.js"></script>
	<script>
	/* <![CDATA[ */
	(new SidebarFollow()).init({
		element: jQuery('#sidebar-follow'),
		distanceToTop: 15
	});
	/* ]]> */
	</script>

![侧边栏滚动跟随区域](http://img.neoease.org/2012/11/sidebar-follow-scrolling-section.png)

License
-------

Sidebar Follow is released under the MIT license:

>Copyright (c) 2012 NeoEase.com.
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of
>this software and associated documentation files (the "Software"), to deal in
>the Software without restriction, including without limitation the rights to
>use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
>of the Software, and to permit persons to whom the Software is furnished to do
>so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
>SOFTWARE.
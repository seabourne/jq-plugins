tabs
=============

Tabbed content

Example:

Javascript
----------

	$(".dataTabs").tabs();

Use the element that contains your list of tab links for the selector.

HTML
----

	<ul class='dataTabs'>
		<li><a href='#tab1'>Tab 1</a></li>
		<li><a href='#tab2'>Tab 2</a></li>
		<li><a href='#tab3'>Tab 3</a></li>
	</ul>
	<div id='tab1'>
		<p>Hi, this is the first tab.</p>
	</div>
	<div id='tab2'>
		<p>This is the 2nd tab.</p>
	</div>
	<div id='tab3'>
		<p>And this is the 3rd tab.</p>
	</div>

Make sure your links point to a unique element on the page. The first tab will be shown by default.
/*	
	<ul class='tabs'>
		<li><a href='#tab1'>Tab 1</a></li>
		<li><a href='#tab2'>Tab 2</a></li>
		<li><a href='#tab3'>Tab 3</a></li>
	</ul>
	<div id='tab1'>
		<p>This is the first tab.</p>
	</div>
	<div id='tab2'>
		<p>This is the 2nd tab.</p>
	</div>
	<div id='tab3'>
		<p>And this is the 3rd tab.</p>
	</div>
*/

(function($) {
	$.fn.tabs = function() {
		var $containers = $(this);
		$containers.each(function(){
		console.log($containers);
			try {
				// For each set of tabs, we want to keep track of
				// which tab is active and it's associated content
				var $active, $content, $links = $(this).find('a');

				// If the location.hash matches one of the links, use that as the active tab.
				// If no match is found, use the first link as the initial active tab.
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');
				$content = $($active.attr('href'));

				// Hide the remaining content
				$links.not($active).each(function () {
						$($(this).attr('href')).hide();
				});

				// Bind the click event handler
				$(this).on('click', 'a', function(e){
						// Make the old tab inactive.
						$active.removeClass('active');
						$content.hide();

						// Update the variables with the new link and content
						$active = $(this);
						$content = $($(this).attr('href'));

						// Make the tab active.
						$active.addClass('active');
						$content.show();

						// Prevent the anchor's default click action
						e.preventDefault();
				});
			}
			catch (err) {
				console.log(err);
			}
		});
		return this;
	};
})(jQuery);
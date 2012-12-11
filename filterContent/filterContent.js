/**
 * This plugin enables quick filtering of content through a textfield. Call this function to enable all filter forms on page
 * There may be multiple on a page, just check your id's.

$("<< search box >>").filterContent('<< search wrapper >>','<< filtered wrapper >>','.<< optional, filtered element >>');
ex: $(".filterContent").filterContent('.filteredContentForm','#formslookuptext');

 * filterContainer is required and is the container that wraps the content you want to filter.
 * filterElement is optional and is an html element or a css className that you want to filter on, instead of every child in the container
 * 
 * If no filterElement is supplied, *every* child of the filterContainer will be shown/hidden on match
 * If a filterElement is supplied, groups will show and hide by focusing on the filterElement.
 **/

jQuery.fn.filterContent = function(filterField, filterContainer, filterElement)
{
	var $containers = $(this);

	$containers.each(function(i) {

		var $filterField = $(filterField);
		var $filterContainer = filterContainer;
		var element = filterElement;

		var element = $filterField.attr('data-element');
		if (typeof(element) == "undefined" || element === '') {
			var $filterContent = $('#'+$filterField.attr('name'));
		} else {
			var $filterContent = $('#'+$filterField.attr('data-container')).find(element);
		}

		$filterField.keyup( function() {
			var srchform = $filterField.val();
			console.log(srchform);
			if (srchform === '') {
				if (typeof(element) == "undefined" || element === '') {
					$filterContent.find('*').show();
				} else {
					$filterContent.parents($filterContainer).show();
					$filterContent.show();
				}
				return;
			}
			// Hide everything, depending if we're sticking to an element hide containers
			if (typeof(element) == "undefined" || element === '') {
				$filterContent.find('*').hide();
			} else {
				$filterContent.parents($filterContainer).hide();
				$filterContent.hide();
			}

			// Search the $filterContent for any string that contains the search forms value
			if (typeof(element) == "undefined" || element === '') {				
				$filterContent.children().each(function(){
					var $me = $(this);
					if($me.html().toLowerCase().indexOf(srchform.toLowerCase()) != -1){
						$me.show();
						$me.find('*').show();
					}
				});				
			}else {
				$filterContent.find(':contains("' + srchform + '")').each(function() {
					$(this).parents($filterContainer).show();
					$(this).parent(element).show();
				});
			}
		});
	});
}
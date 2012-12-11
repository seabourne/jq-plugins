jQuery.fn.filterContent = function(filterField, filterContainer)
{
	var $containers = $(this);

	var showFilteredElements = function(el,text) {
		if(el.html().toLowerCase().indexOf(text.toLowerCase()) != -1){
			el.show();
			el.find('*').show();
		}
	}

	var showElements = function(el,container) {
		if (typeof(el) == "undefined" || el === '') {
			container.find('*').show();
		} else {
			container.show();
		}
	}

	var hideElements = function(el,container) {
		if (typeof(el) == "undefined" || el === '') {
			container.find('*').hide();
		} else {
			container.hide();
		}
	}

	$containers.each(function(i) {

		var $filterField = $(this).find(filterField)
		var $filterContainer = $(this).next(filterContainer);
		var element = $filterField.attr('data-element');

		if (typeof(element) == "undefined" || element === '') {
			var $filterContent = $('#'+$filterField.attr('name'));
		} else {
			var $filterContent = $('#'+$filterField.attr('data-container')).find(element);
		}

		$filterField.keyup( function() {
			var srchform = $filterField.val();

			// resetting the form
			if (srchform === '') {
				showElements(element, $filterContent);
				return;
			}

			// Hide the filtered content in the container
			hideElements(element, $filterContent);

			// Search the $filterContent for any string that contains the search forms value
			if (typeof(element) == "undefined" || element === '') {
				$filterContent.children().each(function(){
					var $me = $(this);
					showFilteredElements($me,srchform);
				});
			} else {
				$filterContent.each(function(i) {
					var $me = $(this);
					showFilteredElements($me,srchform);
				});
			}
		});
	});
}
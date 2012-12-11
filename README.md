plugins
=======

jQuery and other Javascript plugins 

filterContent
=============
Refine results to only show what a user has typed.

Example: www.fcc.gov/tools/headlines-archive/2011

Usage: 
	$(".filterForm").filterContent('.filterField','.filterContainer','p');
- .filterForm is the form doing the searching
- .filterField is the search field
- .filterContainer is the element to search in
- p is the child to search on inside .filterContainer. It is optional, without it all children will be searched.

HTML:
	<form class="filterForm">
		<input type="text" class="filterField" name="container1" />
	</form>

	<div class="filterContainer" id="container1">
		<p>It was a cloudy, sultry afternoon; the seamen were lazily lounging about the decks, or vacantly gazing over into the lead-coloured waters.</p>
		<p>Queequeg and I were mildly employed weaving what is called a sword-mat, for an additional lashing to our boat.</p>
		<p>So still and subdued and yet somehow preluding was all the scene, and such an incantation of reverie lurked in the air, that each silent sailor seemed resolved into his own invisible self.</p>
	</div>
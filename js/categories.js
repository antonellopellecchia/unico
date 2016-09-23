$(document).ready(function() {
	var url = document.URL.split('#');
	var id = url[url.length-1];
	main(id);
});

$('.article_categories a').click(function() {
	main($(this).attr('class'));
});

function main(id) {
	$('.category').css('display', 'none');
	$('.category.'+id).css('display', 'block');
	$('#category_list li a.'+id).addClass('active');
}

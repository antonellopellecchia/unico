// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

$(document).ready(function() {
	oldHtml = $('#main').html();
	if ($('.isSmall').css('float') === 'left') {
		$('#search_input').hide();
		$('#category_list').appendTo('.article.group:first-child');
	}
});

$('.search_button').click(function() {
	if ($('.isSmall').css('float') === 'left') {
		var search_input = $('#search_input');
		if (search_input.css('display') === 'none') {
			search_input.fadeIn();
			search_input.focus();
		}
		else {
			search_input.fadeOut();
			search_input.focusout();
		}
	}
});

$('#search_input').focusout(function() {
	if ($('.isSmall').css('float') === 'left')
		$(this).fadeOut();
});

$('#search_submit').click(function() {
	$('#search_input').change();
});

$('#search_input').change(function() {
	var search_key = $(this).val();
	if (search_key === '') return;
	$main = $('#main');
	$('#search_submit').text('Loading');
	$.ajax({
		type: 'GET',
		url: '/feed.xml',
		dataType: 'xml',
		success: function(xml) {
			var items = new Array();
			$(xml).find('item').each(function() {
				var $item = $(this);
				var search_keyLower = search_key.toLowerCase();
				if ($item.children('title').text().toLowerCase().indexOf(search_keyLower) != -1 ||
					$item.children('description').text().toLowerCase().indexOf(search_keyLower) != -1) {
					items.push($item);
					return true;
				}
				$item.children('category').each(function() {
					if ($(this).text().toLowerCase() === search_keyLower) {
						items.push($item);
						return false;
					}
				});
			});
			$main.html('');
			if (items.length == 0) {
				var $result = $('<div class="results_title"></div>');
				$result.text("No results found.");
				$main.append($result);
			} else {
				$results_title = $('<div class="results_title"></div>');
				$results_title.text('search results for '+search_key+':');
				$main.append($results_title);
				//$main.append($('<div class="article group" style="display:none"></div>'));
				$.each(items, function() {
					displayArticle($main, $(this));
					console.log($(this).find('title').text());
				});
			}
		},
		error: function() {
			var $result = $('<div class="noresults_title"></div>');
			$result.text("There was an error in the search. Please try again later.");
			$main.prepend($result);
		},
		complete: function() {
			$('#search_submit').text('Search');
		}
	});
});

$('#search_reset').click(function() {
	if (oldHtml === '') return;
	$('#main').html(oldHtml);
	$('#search_input').val('');
});

function displayArticle($main, $item) {
	$article = $('<div class="article group"></div>');

	var title = $item.children('title').text();
	var url = $('.url').text();
	var link = $item.children('link').text();
	var image = $item.children('image').text();
	var date = $item.children('pubDate').text();

	content = '<a class="article_anchor" href="{1}">';
	content += '<div class="article_image"><img src="{2}" alt="{0}" /></div>';
	content += '<div class="article_date">{3}</div>';
	content += '<div class="article_title">{0}</div>';
	content += '</a>';
	content = content.format(title, link, image, date);

	console.log(content);

	$article.html(content);
	$article.appendTo($main);
}
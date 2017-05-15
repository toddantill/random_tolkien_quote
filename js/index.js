$(document).ready(function () {
	var quoteAPI = "https://api.myjson.com/bins/sj7nj";
	var quotesArray = [];
	var div = document.getElementById('quote');

	function getQuotes() {
		$.getJSON(quoteAPI, function (data) {
			quotesArray = new Array();
			for (i = 0; i < data.length; i++) {
				quotesArray.push(data[i].quoteText)
			}
			loadQuote();
		});
	}

	function loadQuote() {
		var idx = Math.floor(Math.random() * (quotesArray.length - 1));
		$.when($(div).fadeOut('slow', function () {
			$(div).html(quotesArray[idx]);
			$(div).fadeIn('slow');
		})).done(function () {
			var quot = 'https://twitter.com/intent/tweet?text=' + $('#quote').text() + 'Author~ JRR Tolkien';
			$("#tweet").attr("href", quot);
			quotesArray.splice(idx, 1);
		})

		console.log(quotesArray);

		if (quotesArray.length == 0) {

			getQuotes();
		}

	}
	getQuotes();

	document.getElementById("btn-new-quote").addEventListener("click", function () {
		loadQuote();
	});
});
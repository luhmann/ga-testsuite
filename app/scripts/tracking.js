;(function ($) {
	window._gaq = {};
	_gaq.push = function (options) {
		console.log(options);
	};

	$('body').on('click', '.btn', function () {
		var title = $(this).text(),
			url = $(this).attr('href');

		_gaq.push(['_trackEvent', 'Button', title, url]);
	});
}(jQuery));
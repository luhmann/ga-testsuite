/*global describe, it */
'use strict';

(function () {
	describe('Test Google Analytics Events', function () {

		beforeEach(function () {
			spyOn(_gaq, 'push');
			loadFixtures('home.html')
		});

		it('track the button click', function () {
			var link = $('.btn');
			link.click();

			expect(_gaq.push).toHaveBeenCalledWith(['_trackEvent', 'Button', 'Splendid!', "#"]);
		});
	});
})();

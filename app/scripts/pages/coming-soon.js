(function($) {
	$.fn.countdown = function(options, callback) {
		thisEl = $(this);
		var settings = {
			date      : thisEl.data('date'),
			twoDigits : null
		};
		if (options) {
			$.extend(settings, options);
		}

		function countdown_proc() {
			var eventDate = Date.parse(settings['date']) / 1000;
			var currentDate = Math.floor($.now() / 1000);
			// Clear interval when event date <= current date
			if (eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval);
			}
			var seconds = eventDate - currentDate;
			// get days
			var days = Math.floor(seconds / (24 * 60 * 60));
			seconds -= days * (24 * 60 * 60);
			// get hours
			var hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * (60 * 60);
			// get minutes
			var minutes = Math.floor(seconds / 60);
			// get seconds
			seconds -= minutes * 60;

			// twoDigits
			if (settings['twoDigits'] == 'on') {
				days = days >= 10 ? days : '0' + days;
				hours = hours >= 10 ? hours : '0' + hours;
				minutes = minutes >= 10 ? minutes : '0' + minutes;
				seconds = seconds >= 10 ? seconds : '0' + seconds;
			}
			// Update countdown's HTML values
			thisEl.find('.days').text(days);
			thisEl.find('.hours').text(hours);
			thisEl.find('.minutes').text(minutes);
			thisEl.find('.seconds').text(seconds);
		}
		countdown_proc();
		// set interval to loop every second
		interval = setInterval(countdown_proc, 1000);
	};
})(jQuery);

// Launch the plugin
$('#countdown').countdown(
	{
		date      : '15 Dec 2020 15:35:35', // the End of countdown date
		twoDigits : 'on' // "on" for 2 digits
	},
	function() {
		// Callback Function
		console.log('Done'); // when the countdown is done it'll log in the console "Done"
	}
);

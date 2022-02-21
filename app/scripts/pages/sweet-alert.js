$('.s-alert-1').on('click', function() {
	swal('Any fool can use a computer');
});
$('.s-alert-2').on('click', function() {
	swal('The Internet?', 'That thing is still around?', 'question');
});
$('.s-alert-3').on('click', function() {
	swal('Oops...', 'Something went wrong!', 'error');
});
$('.s-alert-4').on('click', function() {
	swal({
		html : 'Less is more.<br>'.repeat(100)
	});
});
$('.s-alert-5').on('click', function() {
	swal({
		title                  : '<i>HTML</i> <u>example</u>',
		type                   : 'info',
		html                   : 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
		showCloseButton        : true,
		showCancelButton       : true,
		focusConfirm           : false,
		confirmButtonText      : '<i class="fa fa-thumbs-up"></i> Great!',
		confirmButtonAriaLabel : 'Thumbs up, great!',
		cancelButtonText       : '<i class="fa fa-thumbs-down"></i>',
		cancelButtonAriaLabel  : 'Thumbs down'
	});
});
$('.s-alert-6').on('click', function() {
	swal({
		position          : 'top-right',
		type              : 'success',
		title             : 'Your work has been saved',
		showConfirmButton : false,
		timer             : 1500
	});
});
$('.s-alert-7').on('click', function() {
	swal({
		title       : 'jQuery HTML example',
		html        : $('<div>').addClass('some-class').text('jQuery is everywhere.'),
		animation   : false,
		customClass : 'animated tada'
	});
});
$('.s-alert-8').on('click', function() {
	swal({
		title              : 'Are you sure?',
		text               : "You won't be able to revert this!",
		type               : 'warning',
		showCancelButton   : true,
		confirmButtonColor : '#3085d6',
		cancelButtonColor  : '#d33',
		confirmButtonText  : 'Yes, delete it!'
	}).then((result) => {
		if (result.value) {
			swal('Deleted!', 'Your file has been deleted.', 'success');
		}
	});
});
$('.s-alert-9').on('click', function() {
	swal({
		title              : 'Are you sure?',
		text               : "You won't be able to revert this!",
		type               : 'warning',
		showCancelButton   : true,
		confirmButtonColor : '#3085d6',
		cancelButtonColor  : '#d33',
		confirmButtonText  : 'Yes, delete it!',
		cancelButtonText   : 'No, cancel!',
		confirmButtonClass : 'btn btn-success',
		cancelButtonClass  : 'btn btn-danger',
		buttonsStyling     : false,
		reverseButtons     : true
	}).then((result) => {
		if (result.value) {
			swal('Deleted!', 'Your file has been deleted.', 'success');
			// result.dismiss can be 'cancel', 'overlay',
			// 'close', and 'timer'
		} else if (result.dismiss === 'cancel') {
			swal('Cancelled', 'Your imaginary file is safe :)', 'error');
		}
	});
});
$('.s-alert-10').on('click', function() {
	swal({
		title       : 'Sweet!',
		text        : 'Modal with a custom image.',
		imageUrl    : '../assets/img/gallery/1.jpg',
		imageWidth  : 400,
		imageHeight : 200,
		imageAlt    : 'Custom image',
		animation   : false
	});
});
$('.s-alert-11').on('click', function() {
	swal({
		title      : 'Custom width, padding, background.',
		width      : 600,
		padding    : 100,
		background : '#fff url("../assets/img/gallery/31.jpeg")'
	});
});
$('.s-alert-12').on('click', function() {
	swal({
		title  : 'Auto close alert!',
		text   : 'I will close in 5 seconds.',
		timer  : 5000,
		onOpen : () => {
			swal.showLoading();
		}
	}).then((result) => {
		if (result.dismiss === 'timer') {
			console.log('I was closed by the timer');
		}
	});
});
$('.s-alert-13').on('click', function() {
	swal({
		title             : 'هل تريد الاستمرار؟',
		confirmButtonText : 'نعم',
		cancelButtonText  : 'لا',
		showCancelButton  : true,
		showCloseButton   : true
		//target: $('#rtl-container')[0]
	});
});
$('.s-alert-14').on('click', function() {
	swal({
		title               : 'Submit email to run ajax request',
		input               : 'email',
		showCancelButton    : true,
		confirmButtonText   : 'Submit',
		showLoaderOnConfirm : true,
		preConfirm          : (email) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					if (email === 'taken@example.com') {
						swal.showValidationError('This email is already taken.');
					}
					resolve();
				}, 2000);
			});
		},
		allowOutsideClick   : false
	}).then((result) => {
		if (result.value) {
			swal({
				type  : 'success',
				title : 'Ajax request finished!',
				html  : 'Submitted email: ' + result.value
			});
		}
	});
});
$('.s-alert-15').on('click', function() {
	swal.setDefaults({
		input             : 'text',
		confirmButtonText : 'Next &rarr;',
		showCancelButton  : true,
		progressSteps     : [ '1', '2', '3' ]
	});

	var steps = [
		{
			title : 'Question 1',
			text  : 'Chaining swal2 modals is easy'
		},
		'Question 2',
		'Question 3'
	];

	swal.queue(steps).then((result) => {
		swal.resetDefaults();

		if (result.value) {
			swal({
				title             : 'All done!',
				html              : 'Your answers: <pre>' + JSON.stringify(result.value) + '</pre>',
				confirmButtonText : 'Lovely!'
			});
		}
	});
});
$('.s-alert-16').on('click', function() {
	const ipAPI = 'https://api.ipify.org?format=json';

	swal.queue([
		{
			title               : 'Your public IP',
			confirmButtonText   : 'Show my public IP',
			text                : 'Your public IP will be received ' + 'via AJAX request',
			showLoaderOnConfirm : true,
			preConfirm          : () => {
				return $.get(ipAPI).then((data) => {
					swal.insertQueueStep(data.ip);
				});
			}
		}
	]);
});

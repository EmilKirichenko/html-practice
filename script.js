$(document).ready(function() {
	$('.friend,.center__portrait,.center__real-name,.center__username').click(function(event) {
		$('.profile').addClass('profile_active');
	});
	$('.profile__close').click(function(event) {
		$('.profile').removeClass('profile_active');
	});
	$('.channels__caption').click(function(event) {
		$('.channels__content').toggleClass('list__content_active');
	});
	$('.friends__caption').click(function(event) {
		$('.friends__content').toggleClass('list__content_active');
	});
});

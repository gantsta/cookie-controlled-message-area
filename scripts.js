jQuery(document).ready(function($){

	/**
	 * Functionality to display the #message_area div in the footer if the MessageArea cookie has not been set.
	 * Also sets the MessageArea cookie if the #dismiss_message_area button is clicked.
	 * 
	 * @author		gantsta
	 */
	function messageAreaLaunch(){
		var cookied = document.cookie.indexOf('MessageArea=1') > -1;
		// console.log(cookied);
		if(!cookied) {
			$('#message_area').fadeIn('fast');
			$('#dismiss_message_area').on('click', function(){
				var d = new Date();
				//											   m     S    M    H   D
				d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * 5));						// Set the cookie for 5 days
				var expires = "expires="+ d.toUTCString();
				document.cookie = "MessageArea=1;" + expires + ";path=/";
				$('#message_area').fadeOut('200');
			});
		}
	}

	$(window).load(function() {
		messageAreaLaunch();
	} );

});

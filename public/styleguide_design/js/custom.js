	/**
 * Custom Jquery
 */

( function( $ ) {


	// Hamburger menu button
	$( 'a.menu' ).click(
		function(e){
			$( this ).siblings( '#site-navigation' ).toggleClass( 'slide' );
			$( this ).toggleClass( 'expanded' );
			$( this ).addClass( 'clicky' );
			
			return false;
	 		e.preventDefault();
		}
	);
	
	// Close Mobile Menu after click
	$( '#site-navigation li a' ).click(
		function(){
			$( this ).closest( '.nav-container' ).find( 'a.menu' ).removeClass( 'expanded' );
			$( this ).closest( '#site-navigation' ).toggleClass( 'slide' );
			
		}
	);	

	// Site title and description.
	$( '.section.portfolios' ).click(
		function(){
			$( this ).find( 'div.the-work' ).slideDown(300);
			
		}
	);
	
	$( 'a.work-close-bttn' ).click(
		function(e){
			$( this ).closest( 'div.the-work' ).slideUp(300);
			
			return false;
	 		e.preventDefault();

		}
	);
	
	
	//Smooth Scroll
	
	$(function() {
	    $('#site-navigation li a').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1000,'easeInOutExpo');
	        /*
	        if you don't want to use the easing effects:
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1000);
	        */
	        event.preventDefault();
	    });
	});
 	
	//Smooth Scroll view the work
	$(function() {
	    $('a.view-the-work').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500,'easeInOutExpo');
	        /*
	        if you don't want to use the easing effects:
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1000);
	        */
	        event.preventDefault();
	    });
	});
	
	//Smooth Scroll logo
	$(function() {
	    $('a#logo').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500,'easeInOutExpo');
	        /*
	        if you don't want to use the easing effects:
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1000);
	        */
	        event.preventDefault();
	    });
	});
	
	
	
} )( jQuery );
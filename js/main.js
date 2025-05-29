
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
	// Testimonial Slider
	  	$(document).ready(function() {
	      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});	

}());

function loadGoogleForm() {
  const value = document.getElementById("service-select").value;
  const container = document.getElementById("google-form-container");

  const formMap = {
    garbage: "https://docs.google.com/forms/d/e/1FAIpQLSeitk6qVdVCrpG8KCTd-Pqs2bFpQENa90B7vyMxGaivt9suwQ/viewform?embedded=true",
    pressure: "https://docs.google.com/forms/d/e/1FAIpQLScd593nR5DJau-RJc4xvEy4-ky4-URgqYdkXniZ0iZeFr-J3g/viewform?embedded=true",
    window: "https://docs.google.com/forms/d/e/1FAIpQLScazZUpNiqCkME4Gl1dEOy8YvOPMt3XmgeFz4WP76kPdfMUVw/viewform?embedded=true",
    landscaping: "https://docs.google.com/forms/d/e/1FAIpQLScbwadbOpNYJkbSqVYcW6lFbRXJcTl3xHW7wiC_677xITtrwQ/viewform?embedded=true"
    // Add snow, odd job if needed
  };

  if (formMap[value]) {
    container.innerHTML = `
      <iframe 
        src="${formMap[value]}" 
        width="100%" 
        height="1000px" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        Loading…
      </iframe>`;
  } else {
    container.innerHTML = "";
  }
}

}
main();

//Menu collapse bar (top nav)	
	$(document).ready(function(){
		$("#nav-mobile").html($("#nav-main").html());
		$("#nav-trigger span").click(function(){
			if ($("nav#nav-mobile ul").hasClass("expanded")) {
				$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
				$(this).removeClass("open");
			} else {
				$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
				$(this).addClass("open");
			}
		});
	});
	


//Tab Scrolling Animation	
$(document).ready(function (){
            $("#click1").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#scrolltotabs").offset().top
                    });
                //});
            });
        });
$(document).ready(function (){
            $("#click2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#scrolltotabs").offset().top
                    });
                //});
            });
        });
$(document).ready(function (){
            $("#click3").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#scrolltotabs").offset().top
                    });
                //});
            });
        });
$(document).ready(function (){
            $("#click4").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#scrolltotabs").offset().top
                    });
                //});
            });
        });

		
		$(document).ready(function(){
			   $(window).bind('scroll', function() {
			   var stickyHeight = window.innerHeight - 300 ;
			   console.log("scrollTop: " + $(window).scrollTop());
				if ($(window).scrollTop() > stickyHeight) {
					 $('#sticky').addClass('fixed');
				 }
				 else {
					 $('#sticky').removeClass('fixed');
				 }
				});
			});

$(document).ready(function (){
            $("#optionlink-scroll0").click(function (){
				
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section1").offset().top - $('#sticky').height()
                    });
                //});
            });
			
			$("#optionlink-scroll").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section2").offset().top - $('#sticky').height()
                    });
                //});
            });
			
			$("#optionlink-scroll2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section3").offset().top - $('#sticky').height()
                    });
                //});
            });
			$("#optionlink-scroll3").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section4").offset().top- $('#sticky').height()
                    });
                //});
            });

			$("#question-link1").click(function (){
				
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section1").offset().top - $('#sticky').height()
                    });
                //});
            });
			$("#question-link2").click(function (){
				
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section2").offset().top - $('#sticky').height()
                    });
                //});
            });
			$("#question-link3").click(function (){
				
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section3").offset().top - $('#sticky').height()
                    });
                //});
            });
			$("#question-link4").click(function (){
				
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section4").offset().top - $('#sticky').height()
                    });
                //});
            });
			
	});
// USE CASE QUESTIONS Switching fixed/absolute


		
//SUPPORT PAGE		
//Navscroll

		
//nav scrollbar
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a.navscroll[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a.navscroll').each(function () {
            $(this).removeClass('scroll-active');
        })
        $(this).addClass('scroll-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
	$('a.navscroll2[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a.navscroll2').each(function () {
            $(this).removeClass('scroll-active');
        })
        $(this).addClass('scroll-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
	var scrollBottom = $('#topbar').height() ;
    $('#nav-scroll a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-scroll a').removeClass("scroll-active");
            currLink.addClass("scroll-active");
        }
        else{
            currLink.removeClass("scroll-active");
        }
    });
	$('#nav-scroll2 a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-scroll2 a').removeClass("scroll-active");
            currLink.addClass("scroll-active");
        }
        else{
            currLink.removeClass("scroll-active");
        }
    });
}

$(document).ready(function (){
            $("#navscroll").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    });
                //});
            });
			$("#navscroll2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    });
                //});
            });
        });


	

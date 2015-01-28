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

$(document).ready(function() {
    $('#sticky').scrollToFixed( { marginTop: 0, limit: 7000 } );

});		
		
/*                                
$(document).ready(function(){
    $(window).bind('scroll', function() {
		var stickyHeight = ((window.innerHeight - $('#topbar').height()) - $('#scrolltotabs').height());
	//console.log("scrollTop: " + $(window).scrollTop());
	//console.log($("#section1").offset().top);
		if ($(window).scrollTop() > stickyHeight) {
			$('#sticky').addClass('fixed');
		}
		else {
			$('#sticky').removeClass('fixed');
		}
    });
});

*/
/*var current_Position = $(document).scrollTop();

$(document).ready(function (){
    function goToTarget(target) {
        
		
		
	if(/*currentPosition < $('sticky').hasClass('scroll-to-fixed-fixed') === true) {
        var currentStickyHeight = 0;
    } 
	else {
        var currentStickyHeight = $("#send-height").height();
    }

    var moveTo = (($(target).offset().top - $('#sticky').height()) - currentStickyHeight);
                                                                
    $('html, body').animate({
        scrollTop: moveTo
    });
    }*/
	
$(document).ready(function (){
                                                function goToTarget(target) {
                                                                var currentPosition = $(document).scrollTop();

                                                                if(currentPosition < 300) {
                                                                                var currentStickyHeight = $("#send-height").height();
                                                                } else {
                                                                                var currentStickyHeight = 0;
                                                                }

                                                                var moveTo = (($(target).offset().top - $('#send-height').height()) );
                                                                
                                                                                $('html, body').animate({
                                                                                                scrollTop: moveTo
                                                                                });
                                                }


	
    $("#optionlink-scroll0").click(function (){
		
        goToTarget("#section1")
    });                                          
    $("#optionlink-scroll").click(function (){
        goToTarget("#section2")
	});
                                                
    $("#optionlink-scroll2").click(function (){
        goToTarget("#section3")
    });
    $("#optionlink-scroll3").click(function (){
        goToTarget("#section4")
    });
    $("#question-link1").click(function (){
        goToTarget("#section1")
    });
	$("#question-link2").click(function (){
        goToTarget("#section2")
    });
    $("#question-link3").click(function (){
        goToTarget("#section3")
    });
    $("#question-link4").click(function (){
        goToTarget("#section4")
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


                

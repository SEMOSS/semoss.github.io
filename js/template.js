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
	
//Solutions image switch
function FirstPic(){
    	document.Mainpic.src = document.pic1.src
    	return
    }
function SecPic(){
    	document.Mainpic.src = document.pic2.src;
		document.readme.innerhtml = 'Heat Maps provide an easy way to compare quantitative data and allows you to see variations in data based on color. They are constructed as a table and use colored squares that represent the data value.  The following is a view of a heat map visualization with the capabilities outlined in the table below.';
    	return
    }
function ThiPic(){
    	document.Mainpic.src = document.pic3.src
    	return
    }
function ForPic(){
    	document.Mainpic.src = document.pic4.src
    	return false;
		preventDefault();
    }
function FifPic(){
    	document.Mainpic.src = document.pic5.src
    	return false;
		preventDefault();
    }
	
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

//Healthcarepage
/*$(document).ready(function (){
            $("#optionlink-scroll").click(function (){
                $(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    });
                });
            });
        });*/

		
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


	

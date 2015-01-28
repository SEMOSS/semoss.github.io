$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a.smbluebutton[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a.smbluebutton').each(function () {
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
    $('#sticky-scroll div a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sticky-scroll div a').removeClass("scroll-active");
            currLink.addClass("scroll-active");
        }
        else{
            currLink.removeClass("scroll-active");
        }
    });
	
}

$(document).ready(function (){
            $("#sticky-button").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    });
                //});
            });
			
        });
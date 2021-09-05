$(function(){
    $(window).on('scroll',function(){
        var sticky = $(window).scrollTop();
    
        if(sticky > 59){
            $('#menu').addClass('sticky')
        }else{
            $('#menu').removeClass('sticky')
        }

        if(sticky > 500){
            $('#back').show()
        }else{
            $('#back').hide()
        }

    })

    $('#back').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        })
    })

    $(window).on('load',function(){
        $('#preloader').fadeOut(2000)
    })

})


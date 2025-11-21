/**
 * Created by gali on 2018/11/28.
 */
(function(){
    var turnTo = function(){
        $('a').click(function(){
            $('html,body').animate({
                scrollTop: ($($(this).attr('href')).offset().top-100)
            },1000)
        })
    };
    var navPosition = function(){
      $(window).bind('scroll',function(){
          var navHeight = $(window).height()-100;
          if(navHeight < $(window).scrollTop()){
              $('#h-nav').removeClass('dis');
              //console.log(1);
          }
          else {
              $('#h-nav').addClass('dis');
              //console.log(0);
          }
          $(window).scrollTop() > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();

      })
    };
    var back = function(){
        $('#back-to-top').on('click', function(){
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        });
    };
    var spy = function(){
        $('body').scrollspy({
            target: '#h-nav',
            offset: $(window).height() / 2
        });
    };
    $(function(){
       // turnTo();//导航跳转
       navPosition();//导航位置
       back();//
       spy();
    });
}());
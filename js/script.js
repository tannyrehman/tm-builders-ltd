
$(document).on('ready', function() {
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });


    $(".slick-slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true
    });


  });

  


$(document).ready(function () {
  var i = 0;
  $("#menu").click(function () {
    if (i % 2 == 0) {
      $("#menu #icon").toggleClass("fa-xmark");
    }
    if (i % 2 == 1) {
      $("#menu #icon").toggleClass("fa-bars");
    }
    $(".header .header-2 .navbar").toggleClass("active");
    i++;
  });

  $(window).on("scroll load", function () {
    $("#menu #icon").removeClass("fa-xmark");
    $("#menu #icon").addClass("fa-bars");
    $(".header .header-2 .navbar").removeClass("active");
    i = 0;

    if ($(window).scrollTop() > 68) {
      $(".header .header-2").addClass("active");
    } else {
      $(".header .header-2").removeClass("active");
    }

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".home-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
  });

  $(".small-image img").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let image = $(this).attr("src");

    $(".big-image img").attr("src", image);
  });

  $(".gallery .controls .btn").click(function () {
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".gallery .box").show(200);
    } else {
      $(".gallery .box")
        .not("." + filter)
        .hide(200);
      $(".gallery .box")
        .filter("." + filter)
        .show(400);
    }

    $(this).addClass("active").siblings().removeClass("active");
  });
});

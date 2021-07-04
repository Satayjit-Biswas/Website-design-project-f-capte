(function ($) {
  "use strict";

  $(window).on("load", function () {
    //===== Prealoder
    $(".preloader").delay(500).fadeOut(500);

    //02. Isotope Initialize
    function isotopeInit() {
      $(".project_items").isotope({
        itemSelector: ".item",
        masonry: {
          columnWidth: ".item",
        },
      });
      $(".project_filter_menu ul li").on("click", function () {
        $(".project_filter_menu ul li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project_items").isotope({
          filter: selector,
        });
        return false;
      });
    }
    isotopeInit();
  });

  $(document).ready(function () {
    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });

    //Animate the scroll to yop
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    // Hamburger-menu
    $(".hamburger-menu").on("click", function () {
      $(".hamburger-menu .line-top, .ofcavas-menu").toggleClass("current");
      $(".hamburger-menu .line-center").toggleClass("current");
      $(".hamburger-menu .line-bottom").toggleClass("current");
    });

    //06. magnific Popup Initialize
    function magnificPopupInit() {
      $(".content a").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
    magnificPopupInit();

    //10. Client Slider Initialize
    function client_carouselInit() {
      $(".owl-carousel.client_carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 5,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          390: {
            items: 2,
          },
          575: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
        },
      });
    }
    client_carouselInit();
    // jaralax effect
    var rellax = new Rellax(".rellax", {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    // nice selection
    $(document).ready(function () {
      $(".nice_select").niceSelect();
    });
    //   chart js
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "high",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "transparent",
            borderColor: "red",
            borderWidth: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
    //11. Video Popup Initialize
    function videoPopupInit() {
      $("#play-video").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com/",

              id: "v=",
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },

          srcAction: "iframe_src",
        },
      });
    }
    videoPopupInit();
  });
})(jQuery);

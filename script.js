window.addEventListener(
  "DOMContentLoaded",
  function () {
    $(document).ready(function () {
      $(".buttons").click(function (event) {
        event.preventDefault();
        // setting active menu buttons
        $(this).addClass("active").siblings().removeClass("active");
        // selecting data-filter operation condition
        var filter = $(this).attr("data-filter");
        if (filter == "all") {
          $(".image").show(1000);
        } else {
          $(".image")
            .not("." + filter)
            .hide(1000);
          $(".image")
            .filter("." + filter)
            .show(1000);
        }
      });
      //   LIGHTBOX JQUERY MAGNIFY
      $(".img-container").magnificPopup({
        // removalDelay: 300,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup

        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
        },

        mainClass: "mfp-with-zoom", // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: "ease-in-out", // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          //   opener: function (openerElement) {
          //     // openerElement is the element on which popup was initialized, in this case its <a> tag
          //     // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          //     return openerElement.is("img")
          //       ? openerElement
          //       : openerElement.find("img");
          //   },
        },
      });
    });
  },
  true
);

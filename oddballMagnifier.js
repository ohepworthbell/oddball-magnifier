/**
 * The Oddball Magnifier
 * A touch-compatible, light-weight image magnifier
 * -------------------------------------------------------------------
 * @version 0.0.2
 * @author Oliver Hepworth-Bell (@ohepworthbell)
 * @license The MIT License (MIT)
 * @todo Add more customisation (i.e. custom shapes and border colours)
 */


;(function($){
  jQuery.fn.oddballMagnifier = function(settings){

    /* Make sure only 1 lens is created */
    var isreplica=false;

    /* Set up default settings */
    var config = {
      lens: 340,                    // Sets the size  of the magnifying lens (pixels)
      curve: 340,                   // Sets the border-radius of the lens (set to 0 for a square)
      spread: 20,                   // Sets the size/spread of the lens shadow (pixels)
      shadow: 0.1,                  // Sets the opacity of the shadow (between 0 and 1)
      zoom: 1920,                   // Sets the size of the zoomed in image (pixels)
      border: 8,                    // Sets the border of the lens (pixels)
      inset: false,                 // Sets whether shadow/glow is inset or outer/dropped
      borderColor: "255,255,255",   // Sets colour of border/dropshadow
      shadowColor: "0,0,0"          // Sets colour of border/dropshadow
    };

    /* Function to calculate the lens position */
    function doMove(x,y,mag) {
      var offset = config.lens/2;

      var lenstop = mag.offset().top;
      var left = mag.offset().left;
      var width = parseInt(mag.attr("data-width"));
      var height = parseInt(mag.attr("data-height"));

      /* test for mouse/finger position relative to image boundaries */
      if (x < left || x > (left+width) || y < lenstop || y > (lenstop+height)) {
        touch=false;
        over=false;
        mag=false;

        $(".oddball-lens").hide();
      }

      /* Set background position as a percentage relative to lens position */
      var bgpos = (100/width*(x-left)) + "% " + (100/height*(y-lenstop)) + "%";

      $(".oddball-lens").css({
        top: (y-offset) + "px",
        left: (x-offset) + "px",
        "background-position": bgpos
      });
    }

    /* Load in default settings */
    if(settings){
      $.extend(config, settings);
    }

    /* Call the function for each element */
    return this.each(function(){

      /* A few default variables */
      var img=$(this),
        touch=false,
        mag,
        bg,
        bghd,
        over,
        hasInset,
		x, y;

      /* Set up for each magnifiying image */
      if(img.length) {
        $(this).attr("data-width", $(this).width());
        $(this).attr("data-height", $(this).height());

        /* Create the lens (once!) */
        if(!isreplica) {
          isreplica=true;
          $("body").append("<div class='oddball-lens'></div>");
        }

        /* test whether to drop shadow/glow or inset for "lens" effect */
        if(config.inset) {
          hasInset="inset ";
        } else {
          hasInset="";
        }

        /* Apply default styles to the oddball lens (no external CSS files required */
        $(".oddball-lens").css({
          "position": "absolute",
          "top": "0",
          "left": "0",
          "z-index": "9999",
          "width": config.lens + "px",
          "height": config.lens + "px",
          "background-clip": "border-box",
          "border-radius": config.curve + "px",
          "border": config.border+"px solid rgba("+config.borderColor+",0.4)",
          "background": "#eee no-repeat 0 0",
          "background-size": config.zoom + "px",
          "box-shadow": hasInset + "0 0 " + config.spread + "px rgba("+config.shadowColor+"," + config.shadow + ")",
          "box-sizing": "border-box",
          "cursor": "none",
          "display": "none"
        });

        /* Check defaults on screen resize
         * NOTE: I have kept "scroll" in the check, as when rotating some mobile
         * devices, the "resize" doesn"t fire. Scroll is pretty hacky, but it works!
         */
        $(window).on("load scroll resize", function() {
          img.each(function() {
            $(this).attr("data-width", $(this).width());
            $(this).attr("data-height", $(this).height());
          });
        });

        /* Check for the start of any interaction */
        img.on("mouseenter touchstart", function() {
          over=true;
          mag=$(this);

          bghd = $(this).attr("data-hdsrc");

          if(typeof bghd !== typeof undefined && bghd !== false) {
            bg = $(this).attr("data-hdsrc");
          }
          else {
            bg = $(this).attr("src");
          }

          $(".oddball-lens").css("background-image", "url("+bg+")");
          $(".oddball-lens").stop().show();
        });

        /* Test to catch touch-devices */
        img.on("touchstart", function() {
          touch=true;
        });

        /* Get mouse/finger positions and call function with results */
        $(window).on("touchstart touchmove mousemove", function(e) {
          if(over) {
            if(touch) {
              x = e.originalEvent.touches[0].pageX;
              y = e.originalEvent.touches[0].pageY;
            }
            else {
              x = e.pageX;
              y = e.pageY;
            }
            doMove(x,y,mag);
          }
        });

        /* Hide the lends on touchend */
        $(window).on("touchend", function() {
          touch=false;
          over=false;
          mag=false;

          $(".oddball-lens").hide();
        });
      }
    });
  };
})(jQuery);

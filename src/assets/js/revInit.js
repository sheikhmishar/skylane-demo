var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
  once:
    RS_MODULES.modules["revslider11"] !== undefined
      ? RS_MODULES.modules["revslider11"].once
      : undefined,
  init: function () {
    window.revapi1 =
      window.revapi1 === undefined ||
      window.revapi1 === null ||
      window.revapi1.length === 0
        ? document.getElementById("rev_slider_1_1")
        : window.revapi1;
    if (
      window.revapi1 === null ||
      window.revapi1 === undefined ||
      window.revapi1.length == 0
    ) {
      window.revapi1initTry =
        window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
      if (window.revapi1initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider11"].init();
        });
      return;
    }
    window.revapi1 = jQuery(window.revapi1);
    if (window.revapi1.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_1_1");
      return;
    }
    revapi1.revolutionInit({
      revapi: "revapi1",
      DPR: "dpr",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1240,778,480",
      gridwidth: "1230,1230,778,480",
      gridheight: "900,900,569,480",
      lazyType: "smart",
      spinner: "spinner0",
      perspective: 600,
      perspectiveType: "local",
      editorheight: "900,768,569,480",
      responsiveLevels: "1240,1240,778,480",
      progressBar: { disableProgressBar: true },
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        bullets: {
          enable: true,
          tmp: '<span class="tp-bullet-inner"></span>',
          style: "uranus",
          hide_onmobile: true,
          hide_under: "1024px",
          h_align: "right",
          v_align: "center",
          h_offset: 30,
          v_offset: 0,
          direction: "vertical",
          space: 10,
          container: "layergrid",
        },
      },
      viewPort: {
        global: true,
        globalDist: "-200px",
        enable: false,
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  },
}; // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}

let options = {
  startAngle: -1.55,
  size: 120,
  value: 0.98,
  fill: { gradient: ["#02739a", "#56C6D0"] },
};
$(".circle .bar1")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar1").circleProgress({
  value: 0.97,
});
$(".react .bar1").circleProgress({
  value: 0.9,
});

(function (func) {
  $.fn.addClass = function () {
    // replace the existing function on $.fn
    func.apply(this, arguments); // invoke the original function
    this.trigger("classChanged"); // trigger the custom event
    return this; // retain jQuery chainability
  };
})($.fn.addClass); // pass the original function as an argument

(function (func) {
  $.fn.removeClass = function () {
    func.apply(this, arguments);
    this.trigger("classChanged");
    return this;
  };
})($.fn.removeClass);

var slider = $(".slider");

function onClassChanged() {
  console.log("SLIDER CLASS ADDED");
  slider.off("classChanged", onClassChanged);
  setTimeout(function () {
    // $('.slider .slick-prev').addClass('start-0')
    // $('.slider .slick-prev').addClass('ms-3')
    $(".slider .slick-prev").insertAfter($(".slider .slick-prev").next());
    // $('.slider .slick-next').addClass('end-0')
    // $('.slider .slick-next').addClass('me-3')
  }, 500);
}
slider.on("classChanged", onClassChanged);
slider.slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  appenddots: true,
  cssEase: "linear",
  prevArrow:
    '<button class="slick-prev slick-arrow start-0 ms-3" aria-label="Next" type="button" style="" aria-disabled="false">Prev</button>',
  nextArrow:
    '<button class="slick-next slick-arrow end-0 me-3" aria-label="Next" type="button" style="" aria-disabled="false">Next</button>',
});

(function ($) {
  $.fn.menumaker = function (options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          title: "E-Summit'21",
          format: "dropdown",
          breakpoint: 768,
          sticky: false,
        },
        options
      );

    return this.each(function () {
      cssmenu.find("li ul").parent().addClass("has-sub");
      if (settings.format != "select") {
        cssmenu.prepend('<div id="menu-button">' + settings.title + "</div>");
        $(this)
          .find("#menu-button")
          .on("click", function () {
            $(this).toggleClass("menu-opened");
            var mainmenu = $(this).next("ul");
            if (mainmenu.hasClass("open")) {
              mainmenu.hide().removeClass("open");
            } else {
              mainmenu.show().addClass("open");
              if (settings.format === "dropdown") {
                mainmenu.find("ul").show();
              }
            }
          });

        multiTg = function () {
          cssmenu
            .find(".has-sub")
            .prepend('<span class="submenu-button"></span>');
          cssmenu.find(".submenu-button").on("click", function () {
            $(this).toggleClass("submenu-opened");
            if ($(this).siblings("ul").hasClass("open")) {
              $(this).siblings("ul").removeClass("open").hide();
            } else {
              $(this).siblings("ul").addClass("open").show();
            }
          });
        };

        if (settings.format === "multitoggle") multiTg();
        else cssmenu.addClass("dropdown");
      } else if (settings.format === "select") {
        cssmenu.append('<select style="width: 100%"/>').addClass("select-list");
        var selectList = cssmenu.find("select");
        selectList.append("<option>" + settings.title + "</option>", {
          selected: "selected",
          value: "",
        });
        cssmenu.find("a").each(function () {
          var element = $(this),
            indentation = "";
          for (i = 1; i < element.parents("ul").length; i++) {
            indentation += "-";
          }
          selectList.append(
            '<option value="' +
              $(this).attr("href") +
              '">' +
              indentation +
              element.text() +
              "</option"
          );
        });
        selectList.on("change", function () {
          window.location = $(this).find("option:selected").val();
        });
      }

      if (settings.sticky === true) cssmenu.css("position", "fixed");

      resizeFix = function () {
        if ($(window).width() > settings.breakpoint) {
          cssmenu.find("ul").show();
          cssmenu.removeClass("small-screen");
          if (settings.format === "select") {
            cssmenu.find("select").hide();
          } else {
            cssmenu.find("#menu-button").removeClass("menu-opened");
          }
        }

        if (
          $(window).width() <= settings.breakpoint &&
          !cssmenu.hasClass("small-screen")
        ) {
          cssmenu.find("ul").hide().removeClass("open");
          cssmenu.addClass("small-screen");
          if (settings.format === "select") {
            cssmenu.find("select").show();
          }
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {
    $(window).load(function () {
      $("#cssmenu").menumaker({
        title: "E-Summit'21",
        format: "dropdown",
      });

      // $("#cssmenu").prepend("<div id='menu-indicator'></div>");

      var foundActive = false,
        activeElement,
        indicatorPosition,
        // indicator = $("#cssmenu #menu-indicator"),
        defaultPosition;

      $("#cssmenu > ul > li").each(function () {
        if ($(this).hasClass("active")) {
          activeElement = $(this);
          foundActive = true;
        }
      });

      if (foundActive === false) {
        activeElement = $("#cssmenu > ul > li").first();
      }

      defaultPosition = indicatorPosition =
        activeElement.position().left + activeElement.width() / 2 - 5;
      // console.log(activeElement);
      // console.log(activeElement.position().left);
      // console.log(activeElement.width());
      indicator.css("left", indicatorPosition);

      $("#cssmenu > ul > li").hover(
        function () {
          activeElement = $(this);
          indicatorPosition =
            activeElement.position().left + activeElement.width() / 2 - 5;
          indicator.css("left", indicatorPosition);
        },
        function () {
          indicator.css("left", defaultPosition);
        }
      );
    });
  });
})(jQuery);

function showmessage() {
  document.getElementById("response").innerHTML = "Submitting...";
}
function scroll_active() {
  var scrolled = window.scrollY;
  var dist = 0.4 * window.innerHeight;
  var aboutus = document.getElementById("aboutus").offsetTop - dist;
  var whyca = document.getElementById("whyca").offsetTop - dist;
  var incen = document.getElementById("incentives").offsetTop - dist;
  var respo = document.getElementById("container-fluid").offsetTop - dist;
  var faq = document.getElementById("faq").offsetTop - dist;
  var test = document.getElementById("test").offsetTop - dist;
  var cont = document.getElementById("cont").offsetTop;
  cont1 = test + 0.7 * window.innerHeight;
  if (scrolled < aboutus) {
    change_active(0, 0);
    change_active(0, 1);
  }
  if (scrolled > aboutus && scrolled < whyca) {
    change_active(1, 0);
    change_active(1, 1);
  }
  if (scrolled > whyca && scrolled < incen) {
    change_active(2, 0);
    change_active(2, 1);
  }
  if (scrolled > incen && scrolled < respo) {
    change_active(3, 0);
    change_active(3, 1);
  }
  if (scrolled > respo && scrolled < faq) {
    change_active(4, 0);
    change_active(4, 1);
  }
  if (scrolled > faq && scrolled < test) {
    change_active(5, 0);
    change_active(5, 1);
  }
  if (scrolled > test && scrolled < cont) {
    change_active(6, 0);
    change_active(6, 1);
  }
  if (scrolled > cont1) {
    change_active(7, 0);
    change_active(7, 1);
  }
}

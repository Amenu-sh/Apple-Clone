$(document).ready(function () {
  toggleAble();
});
function toggleAble() {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("toggleClass");
  } else {
    $(".footer-links-wrapper").removeClass("toggleClass");
  }
  $(window).on("resize", function () {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("toggleClass");
      $(".footer-links-wrapper ul").hide();
    } else {
      $(".footer-links-wrapper").removeClass("toggleClass");
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3").removeClass("expanded");
      $("h3").css("border", "");
    }
  });
  //footer collapse functionality
  $(document).on("click", ".toggleClass h3", function () {
    $(this).css("border", "1px solid green");
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
    //console.log("toggleClass");
  });
  // search bar
  $(".search-link").click(function (event) {
    event.preventDefault();
    $("navbar-collapse.collapse").removeClass("show");
    $(".searchbox").slideToggle();
  });
}

///////////// css /////////////
// .expanded:after {
//     font-family: "FontAwesome";
//     font-weight: 900;
//     content: "\f00d";
//     /* padding-left: 10px;
//   padding-top: 10px; */
//     /* display: inline-block; */
//     font-size: 10px;
//     float: right;
//     clear: both;
//   }

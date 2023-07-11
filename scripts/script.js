$(function () {
  $(".hamburger-menu").click(function () {
    console.log("click");
    $(".sliding-navbar").toggleClass("sliding-navbar--open");
    $(".mask").toggleClass("show");
    $(".hamburger").toggleClass("menu-opened");
    $("body").css("overflow", "hidden");
  });

  $(".mask").click(function () {
    $(".sliding-navbar").toggleClass("sliding-navbar--open");
    $(".mask").removeClass("show");
    $(".hamburger").toggleClass("menu-opened");
    $("body").css("overflow", "scroll");
  });
  $("#cross").click(function () {
    $(".sliding-navbar").toggleClass("sliding-navbar--open");
    $(".mask").removeClass("show");
    $(".hamburger").toggleClass("menu-opened");
    $("body").css("overflow", "scroll");
  });
});

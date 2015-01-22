$(document).ready(function() {
  // execute our javascript when the DOM has been loaded


  // our nav links
  var $home = $('nav a').eq(0);
  var $disney = $('nav a').eq(1);
  var $montana = $('nav a').eq(2);
  var $ny = $('nav a').eq(3);
  var $houston = $('nav a').eq(4);
  var $au = $('nav a').eq(5);
  var $oregon = $('nav a').eq(6);
  // home links
  var $disneyHome = $('.home a').eq(0);
  var $houstonHome = $('.home a').eq(1);
  var $montanaHome = $('.home a').eq(2);
  var $auHome = $('.home a').eq(3);
  var $nyHome = $('.home a').eq(4);
  var $oregonHome = $('.home a').eq(5);

  // event bindings for each click of home links
  $(".home a").click(function(){
    $('aside').show();
  });

  $disneyHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.disney').siblings().removeClass("active");
    $('.disney').addClass('active');

  });

  $montanaHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.montana').siblings().removeClass("active");
    $('.montana').addClass('active');

  });

  $nyHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.ny').siblings().removeClass("active");
    $('.ny').addClass('active');

  });

  $houstonHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.houston').siblings().removeClass("active");
    $('.houston').addClass('active');

  });

  $auHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.au').siblings().removeClass("active");
    $('.au').addClass('active');

  });

  $oregonHome.click(function (event) {
    event.preventDefault();

    $(this).closest("nav li").siblings().removeClass("activeNav");
    $(this).closest("nav li").addClass("activeNav");
    $('.home').removeClass("active");
    $('.oregon').siblings().removeClass("active");
    $('.oregon').addClass('active');

  });


  // our event bindings for each click of the nav items
  $home.click(function (event) {
    event.preventDefault();
    var $myLi = $(this).closest("li");
    var $mySiblings = $myLi.siblings();

    $mySiblings.removeClass("activeNav");
    $myLi.addClass("activeNav");
    $('.disney').siblings().removeClass("active");
    $('.home').addClass('active');

  });

  $("#hide").click(function(){
    $('aside').hide();
  });


  $disney.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.disney').siblings().removeClass("active");
    $('.disney').addClass('active');

  });

  $montana.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.montana').siblings().removeClass("active");
    $('.montana').addClass('active');

  });

  $ny.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.ny').siblings().removeClass("active");
    $('.ny').addClass('active');

  });

  $houston.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.houston').siblings().removeClass("active");
    $('.houston').addClass('active');

  });

  $au.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.au').siblings().removeClass("active");
    $('.au').addClass('active');

  });

  $oregon.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.oregon').siblings().removeClass("active");
    $('.oregon').addClass('active');

  });

});

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
  // navigation as a whole


  // our event bindings for each click of the header navs
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

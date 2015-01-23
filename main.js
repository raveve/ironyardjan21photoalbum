$(document).ready(function() {

// From home page links to individual album pages with nav activated for album selected
  $(".home a").click(function (event) {
    event.preventDefault();

    console.log("this is rel: ", $(this).attr("rel"));

    var relatedClass = $(this).attr("rel");

    $(this).closest("li").siblings().removeClass("activeNav");
    $('[rel="'+ relatedClass +'"]').addClass("activeNav");

    $(".home").removeClass("active");
    $("aside").addClass("active");
    $(relatedClass).addClass("active");

    console.log(relatedClass);
  });

// Select individual nav items and highlight selected and show album for selection
  $("nav a").click(function (event) {
    event.preventDefault();

    console.log("this is rel: ", $(this).attr("rel"));

    var relatedClass = $(this).attr('rel');

    $(this).closest("li").siblings().children().removeClass("activeNav");
    $(this).addClass("activeNav");


    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass('active');

    console.log(relatedClass);
  });

// Hides albums and nav when going "home" from nav
  $("#hide").click(function (event) {
    event.preventDefault();

    console.log("this is home nav click");

    $("aside").removeClass("active");
    $("article").removeClass("active");
    $(".home-albums a").removeClass("activeNav");
  });



  //$(".container a").click(function (event) {
    //event.preventDefault();

    //console.log("this is rel: ", $(this).attr("rel"));

    //var relatedClass = $(this).attr('rel');

    //$(this).closest("li").children().removeClass("activeNav");
    //$(this).addClass("activeNav");


    //$(relatedClass).siblings().removeClass("active");
    //$(relatedClass).addClass('active');

    //console.log(relatedClass);
  //});



});

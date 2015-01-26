$(document).ready(function() {

// Home page links to individual album pages with nav activated for album selected
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

    var relatedClass = $(this).attr("rel");

    $(this).closest("li").siblings().children().removeClass("activeNav");
    $(this).addClass("activeNav");


    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass("active");

    console.log(relatedClass);
  });

// Hides albums and nav when going "home" from nav
  $("#hide").click(function (event) {
    event.preventDefault();

    console.log("this is home nav click");

    $("aside").removeClass("active");
    $("article").removeClass("active");
    $(this).removeClass("activeNav");
    $(".home-albums a").removeClass("activeNav");
  });


// Takes us to full photo view from album after clicking on photo text link
  $(".album-container a").click(function (event) {
    event.preventDefault();

    console.log("this is class: ", $(this).attr("article class"));

    $("aside").removeClass("active");
    $(".album-container article").removeClass("active");
    $(".ind-photo-background").addClass("active");

// Pull photo info / caption and make that text a variable
    var photoInfo = $(this).text();
// Subbing photo info / caption text into the h2
    $(".ind-photo-background h2").text(photoInfo);

// Pull img source from photo info / caption clicked and make that a variable
    var image = $(this).find("img").attr("src");
// Change image on full view to source of image from photo info / caption selected
    $(".ind-photo-background img").attr("src", image);

  });

// Goes back to album view from back to album link on large photo view
  $(".ind-photo-background a").click(function (event) {
    event.preventDefault();

    console.log("this is back to album click");

    var relatedClass = $(".activeNav").attr("rel");

    $(".ind-photo-background").removeClass("active");
    $("aside").addClass("active");
    $(".album-container article").removeClass("active");
    $(relatedClass).addClass("active");
  });

});

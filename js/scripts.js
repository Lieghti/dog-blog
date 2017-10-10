$(document).ready(function(){
  $("h1").click(function(){
    alert("This is a header.");
  });

  //button stuff
  $("button#gray").click(function(){
    $("body").removeClass();
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });





});

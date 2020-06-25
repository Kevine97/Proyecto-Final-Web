$(function(){
  setTimeout(function(){ 
  $("#onload").addClass("out");
  }, 2000);
  setTimeout(function(){ 
  $("#onload").remove();
  }, 1000);
  });

  $(function () {
    $('.nav-collapse').toggle();
 });
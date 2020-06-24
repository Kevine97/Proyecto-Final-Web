$(function(){
  setTimeout(function(){ 
  $("#onload").addClass("out");
  }, 2000);
  setTimeout(function(){ 
  $("#onload").remove();
  }, 1000);
  });
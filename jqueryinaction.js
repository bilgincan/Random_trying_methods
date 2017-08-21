$(document).ready(function()
{
  var pad_array = [];
  $("button").click(function(){
  //  $("#submit_button").css("color","red");
    $("li").css("background-color","red");
    $(this).css("background-color","red");
    var elements = $("#fill_me").val();
    $("#input_text").val(elements) = pad_array;
  });
  $("div").mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });7
   $('div').mouseleave(function(){
     $(this).animate({
       height: '-=10px'

     });
   });
   $("input:checkbox#checkbutton").click(function(){
     $("li").css("color","orange");
   });
   $("#reset_button").click(function(){
   window.location.reload();
 });
});

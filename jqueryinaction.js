$(document).ready(function()
{
  var pad_array = [];
  $("button.Apply_button").click(function(){
    $("li").css("background-color","red");
    $(this).css("background-color","red");
    var elements = $("#fill_me").val();
    $("#input_text").val(elements) = pad_array;
  });
  $("#delete_button").click(function()
{
  $("li").css("background-color","white");
  $("#input_text").val("") ;
})
  $("div").mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   })
   $('div').mouseleave(function(){
     $(this).animate({
       height: '-=10px'

     })
   })
   var clicks = 0;
   $("input:checkbox#checkbutton").click(function color_changer(){
     clicks += 1;
     var new_click_count = clicks;
     console.log(new_click_count);
     if (new_click_count % 2 == 0)
     {
      $("li").css("color","black");
     }
     else{
       $("li").css("color","orange");
     }
     })

$(".radio").change(function(){
  $("#control_button").click(function()
{
  $("<div id='checked'> </div>").insertAfter("table#lang");
  var countChecked = function() {
  var n = $( "input:radio:checked" ).length;
  $( "div#checked" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};
countChecked();
})
})


   $("#reset_button").click(function(){
   window.location.reload();
 });

 $("<p id='First_sentence'> There are </p>").insertAfter("#div_text");
 $("<p> link(s) on that site. </p>").insertAfter("#First_sentence");
});

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
   })
   $('div').mouseleave(function(){
     $(this).animate({
       height: '-=10px'

     })
   })

   $("input:checkbox#checkbutton").click(function(){
        $("li").css("color","orange");

        $("input:checkbox#checkbutton").click(function(){
        $("li").css("color","black");
        })
    })







   $("#reset_button").click(function(){
   window.location.reload();
 });

 $("<p id='First_sentence'> There are </p>").insertAfter("#div_text");
 $("<p> link(s) on that site. </p>").insertAfter("#First_sentence");
});

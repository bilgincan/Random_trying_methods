window.alert("CSS1 sayfasına geçiş");
$(document).ready(function(){
  $("<div class='foo'> I have foo!</div><div class='dont'>I don't</div>")
  .filter(".foo").click(function() {
    alert("I'm foo!");
  }).end().appendTo("#someParentDiv")
  });

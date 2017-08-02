
window.onload = function () {
  document.getElementById("testbutton").onclick = makeItRed;
};
  function makeItRed() {
    document.getElementById("testbutton").style.color = "red";
    var elements = $("div.fillMeIn");
      for(i=0 ; i < elements.length; i++)
      elements[i].innerHTML = "I have added some text to group of nodes."
  };

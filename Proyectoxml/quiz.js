
function nextq() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementByTagName("question") [0]
      .getElementByTagName('wording')[0].textContent =
      this.responseText;
    }
  };
  xhttp.open("GET", "bateria1.xml", true);
  xhttp.send();
}
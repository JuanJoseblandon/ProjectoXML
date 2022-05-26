
var i = 0;
var pregunta = "";
var boton1 = "";
var boton2 = "";
var boton3 = "";
var boton4 = "";
var doc;
var a = 0;
var j = 0;
var correct = "";
function next_quest1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        doc = this.responseXML;
        x = doc.getElementsByTagName("question")[i];
        pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
        document.getElementById("pregunta").innerHTML = pregunta;
        boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
        document.getElementById("1").innerHTML = boton1;
        boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
        document.getElementById("2").innerHTML = boton2;
        boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
        document.getElementById("3").innerHTML = boton3;
        boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
        document.getElementById("4").innerHTML = boton4;
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}
function next_quest2() {
    i++;
    x = doc.getElementsByTagName("question")[i];
    pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("pregunta").innerHTML = pregunta;
    boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("1").innerHTML = boton1;
    boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("2").innerHTML = boton2;
    boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("3").innerHTML = boton3;
    boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("4").innerHTML = boton4;

}
function Restart() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        i=0;
        doc = this.responseXML;
        x = doc.getElementsByTagName("question")[i];
        pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
        document.getElementById("pregunta").innerHTML = pregunta;
        boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
        document.getElementById("1").innerHTML = boton1;
        boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
        document.getElementById("2").innerHTML = boton2;
        boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
        document.getElementById("3").innerHTML = boton3;
        boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
        document.getElementById("4").innerHTML = boton4;
        a = 0;
        document.getElementById('demo').innerHTML = a;
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}
function puntos1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        doc = this.responseXML;
        correcto = doc.getElementsByTagName("choices")[i].getElementsByTagName("choice")[0].attributes[0].Value;
        if (correcto = "yes") {
            a++ ;
            document.getElementById('demo').innerHTML = a;
        }
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}
function puntos2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        doc = this.responseXML;
        correcto = doc.getElementsByTagName("choices")[i].getElementsByTagName("choice")[1].attributes[0].Value;
        if (correcto == "yes") {
            a++;
            document.getElementById('demo').innerHTML = a;
        }
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}
function puntos3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        doc = this.responseXML;
        correcto = doc.getElementsByTagName("choices")[i].getElementsByTagName("choice")[2].attributes[0].Value;
        if (correcto == "yes") {
            a++;
            document.getElementById('demo').innerHTML = a;
        }
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}
function puntos4() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        doc = this.responseXML;
        correcto = doc.getElementsByTagName("choices")[i].getElementsByTagName("choice")[3].attributes[0].Value;
        if (correcto == "yes") {
        a++;
            document.getElementById('demo').innerHTML = a;
        }
    }
    xhttp.open("GET", "bateria1.xml");
    xhttp.send();
}

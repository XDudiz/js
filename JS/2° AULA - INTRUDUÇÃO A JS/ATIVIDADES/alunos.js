var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var Media;
var MR = document.getElementById("MR");

function sla()
{
    p1.value;
    p2.value;
    p3.value;
    p4.value;
    Media = (parseInt(p1.value)  + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value)) /4
    MR.innerHTML = Media;
}
function openImage(src){
    document.getElementById("imageModal").style.display="flex";
    document.getElementById("modalImg").src=src;
}

function closeImage(){
    document.getElementById("imageModal").style.display="none";
}
function calculeazaAcoperis(){

let lungime = parseFloat(document.getElementById("lungime").value);
let latime = parseFloat(document.getElementById("latime").value);
let tip = parseFloat(document.getElementById("tipAcoperis").value);
let panta = parseFloat(document.getElementById("panta").value);

if(isNaN(lungime) || isNaN(latime)){
alert("Completează lungimea și lățimea.");
return;
}

let suprafata = lungime * latime * tip * panta;
let pierderi = suprafata * 0.08;
let tabla = suprafata + pierderi;
let coama = lungime.toFixed(1);
let jgheab = ((lungime + latime) * 2).toFixed(1);

document.getElementById("suprafata").innerHTML = suprafata.toFixed(1);
document.getElementById("tabla").innerHTML = tabla.toFixed(1);
document.getElementById("pierderi").innerHTML = pierderi.toFixed(1);
document.getElementById("coama").innerHTML = coama;
document.getElementById("jgheab").innerHTML = jgheab;

document.getElementById("rezultatCalculator").style.display = "block";

}

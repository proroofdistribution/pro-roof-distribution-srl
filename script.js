function openImage(src){

const modal=document.getElementById("imageModal");
const img=document.getElementById("modalImg");

img.src=src;
modal.style.display="flex";

}

function closeImage(){

document.getElementById("imageModal").style.display="none";

}

const modele={

Britanic:["0,45 mm","0,50 mm","0,60 mm"],

Clasic:["0,40 mm","0,50 mm","0,60 mm"],

Iberic:["0,45 mm","0,50 mm","0,60 mm"],

Adriatic:["0,45 mm","0,50 mm","0,60 mm"],

Balcanic:["0,45 mm","0,50 mm","0,60 mm"],

Gotic:["0,45 mm","0,50 mm","0,60 mm"],

Romanic:["0,50 mm","0,60 mm"],

Hellenic:["0,45 mm","0,50 mm","0,60 mm"],

"Retro Duo":["0,45 mm","0,50 mm","0,60 mm","0,70 mm"],

"Retro Panel":["0,45 mm","0,50 mm","0,60 mm"]

};

const culori={

Lucios:[

"RAL 3000",

"RAL 3005",

"RAL 3009",

"RAL 3011",

"RAL 5010",

"RAL 6005",

"RAL 7016",

"RAL 7024",

"RAL 8003",

"RAL 8004",

"RAL 8017",

"RAL 9002",

"RAL 9005",

"RAL 9006"

],

Mat:[

"RAL 3005",

"RAL 3009",

"RAL 6005",

"RAL 6020",

"RAL 7016",

"RAL 7024",

"RAL 8004",

"RAL 8017",

"RAL 8019",

"RAL 9005"

],

GrandeMat:[

"RAL 3005",

"RAL 3009",

"RAL 6020",

"RAL 7011",

"RAL 7024",

"RAL 8004",

"RAL 8017",

"RAL 8019",

"RAL 9005"

]

};
function actualizeazaGrosime(){

const model=document.getElementById("modelBilka").value;
const lista=document.getElementById("grosime");

lista.innerHTML="";

if(model===""){

lista.innerHTML="<option>Alege modelul mai întâi</option>";
return;

}

modele[model].forEach(function(g){

const opt=document.createElement("option");

opt.value=g;
opt.textContent=g;

lista.appendChild(opt);

});

}

function actualizeazaCulori(){

const finisaj=document.getElementById("finisaj").value;
const lista=document.getElementById("culoareRal");

lista.innerHTML="";

if(finisaj===""){

lista.innerHTML="<option>Alege finisajul mai întâi</option>";
return;

}

culori[finisaj].forEach(function(c){

const opt=document.createElement("option");

opt.value=c;
opt.textContent=c;

lista.appendChild(opt);

});

}
function calculeazaAcoperis(){

const lungime=parseFloat(document.getElementById("lungime").value);
const latime=parseFloat(document.getElementById("latime").value);
const tip=parseFloat(document.getElementById("tipAcoperis").value);
const panta=parseFloat(document.getElementById("panta").value);

if(isNaN(lungime)||isNaN(latime)){

alert("Completează lungimea și lățimea casei.");

return;

}

const suprafata=lungime*latime*tip*panta;
const pierderi=suprafata*0.08;
const tabla=suprafata+pierderi;
const coama=lungime;
const jgheab=(lungime+latime)*2;

document.getElementById("suprafata").textContent=suprafata.toFixed(1);
document.getElementById("tabla").textContent=tabla.toFixed(1);
document.getElementById("pierderi").textContent=pierderi.toFixed(1);
document.getElementById("coama").textContent=coama.toFixed(1);
document.getElementById("jgheab").textContent=jgheab.toFixed(1);

document.getElementById("rezModel").textContent=document.getElementById("modelBilka").value;
document.getElementById("rezGrosime").textContent=document.getElementById("grosime").value;
document.getElementById("rezFinisaj").textContent=document.getElementById("finisaj").value;
document.getElementById("rezCuloare").textContent=document.getElementById("culoareRal").value;

document.getElementById("rezultatCalculator").style.display="block";

}
function completeazaOferta(){

const text=`Solicit ofertă pentru:

Model: ${document.getElementById("modelBilka").value}
Grosime: ${document.getElementById("grosime").value}
Finisaj: ${document.getElementById("finisaj").value}
Culoare: ${document.getElementById("culoareRal").value}

Suprafață estimată: ${document.getElementById("suprafata").textContent} mp
Necesar tablă: ${document.getElementById("tabla").textContent} mp
Pierderi: ${document.getElementById("pierderi").textContent} mp
Coamă: ${document.getElementById("coama").textContent} m
Jgheab: ${document.getElementById("jgheab").textContent} m`;

document.getElementById("detalii").value=text;

document.getElementById("formular").scrollIntoView({

behavior:"smooth"

});

}
document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeImage();

}

});

window.addEventListener("click",function(e){

const modal=document.getElementById("imageModal");

if(e.target===modal){

closeImage();

}

});

window.addEventListener("load",function(){

actualizeazaGrosime();

actualizeazaCulori();

});

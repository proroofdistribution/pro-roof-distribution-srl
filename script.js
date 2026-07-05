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
const modele = {

Britanic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

Clasic:{
grosimi:["0,40 mm","0,50 mm","0,60 mm"]
},

Iberic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

Adriatic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

Balcanic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

Gotic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

Romanic:{
grosimi:["0,50 mm","0,60 mm"]
},

Hellenic:{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
},

"Retro Duo":{
grosimi:["0,45 mm","0,50 mm","0,60 mm","0,70 mm"]
},

"Retro Panel":{
grosimi:["0,45 mm","0,50 mm","0,60 mm"]
}

};

const culori={

Lucios:[
"RAL 3000 Roșu aprins",
"RAL 3005 Vișiniu",
"RAL 3009 Roșu maroniu",
"RAL 3011 Roșu",
"RAL 5010 Albastru",
"RAL 6005 Verde",
"RAL 7016 Gri antracit",
"RAL 7024 Gri",
"RAL 8003 Alamă",
"RAL 8004 Cărămiziu",
"RAL 8017 Maro ciocolatiu",
"RAL 9002 Alb",
"RAL 9005 Negru",
"RAL 9006 Argintiu"
],

Mat:[
"RAL 3005 Vișiniu mat",
"RAL 3009 Roșu maroniu mat",
"RAL 6005 Verde mat",
"RAL 6020 Verde mat",
"RAL 7016 Gri antracit mat",
"RAL 7024 Gri grafit mat",
"RAL 8004 Cărămiziu mat",
"RAL 8017 Maro ciocolatiu mat",
"RAL 8019 Maro închis mat",
"RAL 9005 Negru mat"
],

GrandeMat:[
"RAL 3005 Vișiniu GrandeMat",
"RAL 3009 Roșu maroniu GrandeMat",
"RAL 6020 Verde GrandeMat",
"RAL 7011 Gri GrandeMat",
"RAL 7024 Gri grafit GrandeMat",
"RAL 8004 Cărămiziu GrandeMat",
"RAL 8017 Maro ciocolatiu GrandeMat",
"RAL 8019 Maro închis GrandeMat",
"RAL 9005 Negru GrandeMat"
]

};

function actualizeazaGrosime(){

let model=document.getElementById("modelBilka").value;

document.getElementById("grosimeBilka").innerHTML="";

let lista=document.getElementById("grosime");

lista.innerHTML="";

if(model===""){

lista.innerHTML="<option>Alege modelul mai întâi</option>";
return;

}

modele[model].grosimi.forEach(function(g){

let opt=document.createElement("option");

opt.value=g;

opt.text=g;

lista.appendChild(opt);

});

}

function actualizeazaCulori(){

let finisaj=document.getElementById("finisaj").value;

let lista=document.getElementById("culoareRal");

lista.innerHTML="";

if(finisaj===""){

lista.innerHTML="<option>Alege finisajul mai întâi</option>";

return;

}

culori[finisaj].forEach(function(c){

let opt=document.createElement("option");

opt.value=c;

opt.text=c;

lista.appendChild(opt);

});

}

function addBtnAccueil() {

    var array1 = ['fas fa-search fa-2x', 'fas fa-cog fa-2x', 'fas fa-eye fa-2x', 'fas fa-calendar-check fa-2x', 'fas fa-compass fa-2x'];
    var i = 0;

    array1.forEach(function (element) {
        var divBtn = document.getElementById("btn-navigation");
        var newBtn = document.createElement("BUTTON");
        var newIcone = document.createElement("I");
        newBtn.appendChild(newIcone);
        document.getElementById("btn-navigation").appendChild(newBtn);

        divBtn.getElementsByTagName("I")[i].className = element;


        if (i == 0) {
            divBtn.getElementsByTagName("BUTTON")[i].id = "btnRecherche";
        }
        if (i == 3) {
            divBtn.getElementsByTagName("BUTTON")[i].id = "btnAgenda";
        }

        if (i == 4) {
            divBtn.getElementsByTagName("BUTTON")[i].id = "btnLocalisation";
        }

        i = ++i;
    });

}

function addBtnPlanet() {


    var divBtn = document.getElementById("btn-navigation");
    document.getElementById("btnLocalisation").id = "btnBack";
    divBtn.getElementsByTagName("I")[4].className = "fas fa-parachute-box fa-2x";


    var btnBack = document.getElementById("btnBack");
    btnBack.onclick = function () {
        switchValue("Back");

    }

}

function addBtnAccueilBack() {

    var divBtn = document.getElementById("btn-navigation");
    document.getElementById("btnBack").id = "btnLocalisation";
    divBtn.getElementsByTagName("I")[4].className = "fas fa-compass fa-2x";


}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 0.9) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function addBtnPhoto() {

    var divBtn = document.getElementById("btn")
    var divBtnPhoto = document.createElement("div");

    // btn nouvelle photo
    var newBtn = document.createElement("BUTTON");
    var newtext = document.createTextNode("Nouvelle Photo ");
    var newIcone = document.createElement("I");


    newBtn.appendChild(newtext);
    newBtn.appendChild(newIcone);

    divBtnPhoto.appendChild(newBtn);
    divBtnPhoto.appendChild(newBtn);
    divBtn.appendChild(divBtnPhoto);


    // btn gallerie photo
    var newBtn = document.createElement("BUTTON");
    var newtext = document.createTextNode("Galerie Photo ");
    var newIcone = document.createElement("I");


    newBtn.appendChild(newtext);
    newBtn.appendChild(newIcone);

    divBtnPhoto.appendChild(newBtn);
    divBtnPhoto.appendChild(newBtn);
    divBtn.appendChild(divBtnPhoto);


    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById("btn-navigation");
    divBtn.insertBefore(divBtnPhoto, currentDiv);


    divBtnPhoto.className = "btn-photo";
    divBtnPhoto.getElementsByTagName("I")[0].className = "fas fa-camera";
    divBtnPhoto.getElementsByTagName("I")[1].className = "fas fa-images";
    divBtnPhoto.id = "btn-photo";


    fadeIn(divBtnPhoto);


}

function deleteBtnPhoto() {
    var divBtnPhoto = document.getElementById('btn-photo');
    fadeOut(divBtnPhoto);

    setTimeout(function () {
        divBtnPhoto.remove()
    }, 3000)

}

function AddInputAgenda() {

    if (!document.getElementById('divBtnAgenda') && !document.getElementById('btn-photo')) {


        var divBtn = document.getElementById("btn")
        var divBtnAgenda = document.createElement("div");


        var codeBlock = '<input  type="time" value="22:53:05" > <input type="date" value="2017-06-01" >';

        // Inserting HTML code inside wrapper element
        divBtnAgenda.innerHTML = codeBlock;

        // ajoute le nouvel élément créé et son contenu dans le DOM
        var currentDiv = document.getElementById("btn-navigation");
        divBtn.insertBefore(divBtnAgenda, currentDiv);

        divBtnAgenda.id = "divBtnAgenda";

    } else {
        document.getElementById('divBtnAgenda').remove()
    }
}

function mouseDown(event) {
    event.target.style.color = "white";
}

function mouseUp(event) {
    event.target.style.color = "#D4C3B5";
}


// When the user clicks the button, open the modal
function BtnRecherche() {
    console.log("coucou")
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
function CloseModal() {

    modal.style.display = "none";
}
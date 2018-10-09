const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);


console.log( sceneManager.update);
console.log(sceneManager.onWindowResize);
console.log(sceneManager.tabManager);


var tabManager = sceneManager.tabManager();

var objectsPlanets = tabManager["objectsPlanets"]
const scene = tabManager["scene"]
const renderer = tabManager["renderer"]
const camera = tabManager["camera"]
const controls = tabManager["controls"]
const sceneSubjects = tabManager["sceneSubjects"]

console.log(renderer);




bindEventListeners();
init()
render();



function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}




let modal = document.getElementById('myModal');
console.log( objectsPlanets )

function init( objectsPlanets , renderer ,camera,  modal , scene , controls ) {


    addBtnAccueil();



    document.getElementById("btnAgenda").addEventListener('click', AddInputAgenda, false);
    document.getElementById("btn-navigation").addEventListener('mousedown', mouseDown, false);
    document.getElementById("btn-navigation").addEventListener('mouseup', mouseUp, false);



    // Get the <span> element that closes the modal
    const closeModal = document.getElementsByClassName("close")[0];
    closeModal.addEventListener('mousedown',CloseModal, false);

     //click
     document.addEventListener('mousedown', onDocumentMouseDown , false);
     document.addEventListener('touchstart', onDocumentTouchStart, false);


}
/*
function addClickHandler(elem, arg1, arg2) {
    elem.addEventListener('click', function(e) {
        var x = arg1 + arg2
    }, false);
}*/


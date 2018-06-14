

function SkyStars(scene) {

    var geometry = new THREE.SphereBufferGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);

    var material = new THREE.MeshBasicMaterial({
        //color: 0x1C1C1C
        //map: new THREE.TextureLoader().load( 'textures/maison_bg.jpg' )
        map: new THREE.TextureLoader().load('textures/stars_bg.png')
    });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    this.update = function(time) {

    }

}


function getDistance(choix ) {


    var camPos1 = precisionRound(camera.position.x , 2 )
    var camPos2 = 0 ;

    while ( camPos1 != camPos2  ) {

        console.log(" ============>  camPos1 : " + camPos1)
        console.log(" ============> camPos2 : " + camPos2)
        camPos1 = precisionRound(camera.position.x , 2 )
        var choixGroup = scene.getObjectByName( choix );
        var mesh1 = camera ;
        var mesh2 = choixGroup ;

        var dx = mesh1.position.x - mesh2.position.x;
        var dy = mesh1.position.y - mesh2.position.y;
        var dz = mesh1.position.z - mesh2.position.z;
        var result = Math.sqrt(dx*dx+dy*dy+dz*dz);
        console.log( " distance result = : " + result )
        if ( result < 3 ) {
            console.log( " bingo tu es trop pret "  )
        }

        /*setTimeout(function () {
            camPos2 = precisionRound(camera.position.x , 2 )
        }, 200);*/

        console.log(" ============>  camPos1 : " + camPos1)
        console.log(" ============> camPos2 : " + camPos2)

    }

}

function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}


function detectCollision() {

    var vector = controls.target.clone().sub( controls.object.position ).normalize();
    var ray = new THREE.Ray(controls.object.position, vector);
    var intersects = raycaster.intersectObjects( objectsPlanets, true  );


    if (intersects.length > 0) {
        var namePlanet=   intersects[ 0 ].object.parent.name
        /* console.log(" --- >  namePlanet : " + namePlanet )
         console.log( "          intersects[0].distance : " + intersects[0].distance);
         console.log( "          intersects[ 0 ].object.parent.distance: " + intersects[ 0 ].object.parent.distance);*/

        var namePlanet=   intersects[ 0 ].object.parent.name

        var choixGroup = scene.getObjectByName( namePlanet );
        console.log(  namePlanet + " choixGroup.distance : " + choixGroup.distance  )


        if (intersects[0].distance < 2) {
            console.log( " boummmm !!!!! : " + intersects);

        }
    }
}

function collision(){

    var point = camera.position ;
    console.log( " point.position.x : " + point.x )

    for ( var i = 0; i < objectsPlanets.length; i++ ) {

        //console.log( " planeteteeeeteteteteeteet : " + objectsPlanets[ i ].position.z)
        //console.log( " planeteteeeeteteteteeteet : " + objectsPlanets[ i ].position.x)
        console.log( " planetete " + i + " : " + objectsPlanets[ i ].children[0].geometry.radius)

        var sphere = objectsPlanets[ i ];
        var sphereRadius = objectsPlanets[ i ].children[0].geometry.radius ;

        var distance = Math.sqrt((point.x - sphere.position.x) * (point.x - sphere.position.x) +
            (point.y - sphere.position.y) * (point.y - sphere.position.y) +
            (point.z - sphere.position.z) * (point.z - sphere.position.z));

        console.log( " distance : "+ distance )
        console.log( " sphere.radius : "+ sphereRadius )
        if ( distance < sphereRadius ) {
            console.log( " collision !!!  ")
        }

    }

}
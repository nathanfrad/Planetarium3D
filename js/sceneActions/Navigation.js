function focusZoom(obj) {
    focused = true;
    let target = {
        x: 0.05 * camera.position.x + 0.7 * obj.position.x,
        z: 0.05 * camera.position.z + 0.7 * obj.position.z
        //y: 0.05 * camera.position.y + 0.2 * obj.position.y
    };
    new TWEEN.Tween(camera.position)
        .to(target, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
}

function focusTarget(obj) {
    new TWEEN.Tween(controls.target)
        .to({x: obj.position.x, y: obj.position.y, z: obj.position.z}, 2500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
}

function unfocusZoom(directZ, directX) {
    //controls = new THREE.VRControls(camera);
    new TWEEN.Tween(camera.position).to({x: directX, y: 0, z: directZ}, 2500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
}

function unfocusTarget() {
    new TWEEN.Tween(controls.target).to({x: 0, y: 0, z: 0}, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
}

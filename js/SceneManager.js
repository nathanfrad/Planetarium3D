function SceneManager(canvas) {

    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }


    const objectsPlanets = [];
    const scene = buildScene();

    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const controls = control();
    const sceneSubjects = createSceneSubjects(scene);




    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");
        return scene;
    }

    function control() {
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        //controls.autoRotate = true ;
        controls.autoRotateSpeed = 0.02;
        controls.target.z = 0
        controls.enablePan = false;
        controls.enableZoom = true;
        controls.enableDamping = true;
        controls.minPolarAngle = 0.8;
        controls.maxPolarAngle = Math.PI;
        controls.dampingFactor = 0.07;
        controls.rotateSpeed = 0.07;
        return controls;
    }

     function buildRender({width, height}) {
        const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function buildCamera({width, height}) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 1000;

        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        //const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0.1, 0, 0);

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new Light(scene),
            new Planets(scene, objectsPlanets),
            new SkyStars(scene),
            new Horizon(scene)
            //new Earth(scene),
        ];

        return sceneSubjects;
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);
        TWEEN.update();
        controls.update();
        renderer.render(scene, camera);
    }

    this.onWindowResize = function () {
        const {width, height} = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }


    this.tabManager = function () {
        let tabManager = new Array();
        tabManager["objectsPlanets"] = objectsPlanets;
        tabManager["scene"] = scene;
        tabManager["renderer"] = renderer;
        tabManager["camera"] = camera;
        tabManager["controls"] = controls;
        tabManager["sceneSubjects"] = sceneSubjects;
        return tabManager;
    }

}







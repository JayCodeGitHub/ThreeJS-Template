import '../styles/index.scss'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const colorGreen = new THREE.Color(0x00ff00);
const colorPink = new THREE.Color('hsl(306,100%,60%)');
const colorYellow = new THREE.Color('hsl(40,100%,60%)');

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhongMaterial( { color: colorGreen, shininess: 80} );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.PointLight(colorPink, 2);
const light2 = new THREE.PointLight(colorYellow, 2);

light.position.z = 20;
light.position.y = -20;
light.position.x = -40;

light2.position.z = 10;
light2.position.y = 20;
light2.position.x = 40;

camera.position.z = 5;

scene.add(light);
scene.add(light2);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render( scene, camera );
};

animate();




import '../styles/index.scss'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const colorPink = new THREE.Color('hsl(306,100%,60%)');
const colorYellow = new THREE.Color('hsl(40,100%,60%)');

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: colorYellow, shininess: 80, } );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.PointLight(colorPink, 2);

light.position.x = -40;
light.position.y = -20;
light.position.z = 20;

scene.add(light);
scene.add(cube);

camera.position.z = 15;


renderer.render( scene, camera );


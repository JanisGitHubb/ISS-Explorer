import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';

import ThreeGlobe from 'three-globe';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import countries from './custom.geo.json'

//import dots from './dot.json'



var renderer, camera, scene, controls;

let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth/2;
let windowHalfY = window.innerHeight/2;
var Globe;

init();
onWindowResize();
animate();



let dots = {
  "Dots": []
};


function updateJsonData(newLatitude, newLongitude) {
  dots.Dots = [];

  
  dots.Dots.push({ "lat": newLatitude, "lng": newLongitude });

  initGlobe(dots);
  
}


function fetchData() {
  fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);
      if (data.message === 'success' && data.iss_position) {
        let latitude = parseFloat(data.iss_position.latitude);
        let longitude = parseFloat(data.iss_position.longitude);
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        updateJsonData(latitude, longitude);
      } else {
        console.error('Invalid API response:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }


setInterval(fetchData, 5000);



function init(){
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  var ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3)
  scene.add(ambientLight)
  scene.background = new THREE.Color(0x040d21);

  camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();

  var dLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new THREE.PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 800;
  camera.position.x = 150;
  camera.position.y = 100;

  scene.add(camera);

  //scene.fog =new THREE.Fog(0x535ef3, 400, 2000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 300;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 0.1;
  controls.autoRotate = false;

  controls.minPolarAngle = Math.PI/3.5;
  controls.maxPolarAngle = Math.PI - Math.PI/3;

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousemove", onMouseMove);

}
//TO DO: starting location should be the current ISS position
//Need some function to clear the array
function initGlobe(dots) {

  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })

  .hexPolygonsData(countries.features)
  .hexPolygonResolution(3)
  .hexPolygonMargin(0.3)
  
  //.pointOfView({"lat": "56.95377", "lng": "24.099788","altitude": 2.5}, 1)
  .pointsData(dots.Dots)
  .pointAltitude(0.05)
  .pointRadius(0.6)
  .pointColor(0xff0000)
  console.log(Globe.getCoords(56.95377, 24.09979).x)
  console.log(Globe.getCoords(56.95377, 24.09979).y)
  console.log(Globe.getCoords(56.95377, 24.09979).z)


  //Globe.rotateY(-Math.PI*(5/9));
  //Globe.rotateZ(-Math.PI/6);
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new THREE.Color(0x0b1e6e);
  globeMaterial.emissive = new THREE.Color(0x07144a);
  globeMaterial.shininess = 0.7;

  scene.add(Globe);

}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  windowHalfX = window.innerWidth/1.5;
  windowHalfY = window.innerHeight/1.5;
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  camera.position.x +=
    Math.abs(mouseX) <= windowHalfX/2
      ?(mouseX/2 - camera.position.x)*0.05
      :0;
  camera.position.y += (-mouseY/2 - camera.position.y)* 0.0005
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

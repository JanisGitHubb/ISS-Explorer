import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';
import vertexShader from '/shaders/vertex.glsl'

console.log(vertexShader)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer(
  {
    antialias: true
  })

console.log(scene)
console.log(camera)
console.log(renderer)

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

//create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50), 
  new THREE.ShaderMaterial({
    //vertexShader: vertexShader,
    // fragmentShader:
  }))

scene.add(sphere)

camera.position.z = 15

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
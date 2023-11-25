<script>
import { ref, onMounted } from 'vue';
import * as THREE  from 'three';
import '../assets/style.css';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import { gsap } from 'gsap';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
  
  props: {
    size: Number,
    path: String,
    className: String
  },
  methods: {
    Open() {

        door1Animations.forEach(element => {
        element.play()
      });
      scene.add(light3)
    }
  },
  setup(props) {
    size = props.size
    path = props.path
    const canvas = ref(props.className)
    onMounted(() => {
      SceneSetUp(props.className)
      loop()
    })  

    return {
      canvas,
    }
  },
}

let size = null
let path = null
let scene = null;
let camera = null;
let canvas = null;
let renderer =  null;
let sizes =  null;
let mixer = null;
const clock = new THREE.Clock();
let door1Animations = []
let controls = null;
let light3 = null;

const SceneSetUp = (className) => {
  scene = new THREE.Scene();
  getWindowSizes();
  doorSetup();
  CameraRenderer(className);
  Lighting();
  controlSetUp();
  renderer.setAnimationLoop(animate);
}


const controlSetUp = () => {
  // controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true;
  // controls.enablePan = false;
  // controls.enableZoom = true;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 5;
}

//load model
const doorSetup = () => {
    const loader = new GLTFLoader();
    loader.load( path, function ( gltf ) {
      gltf.scene.position.set(0,-5,1.5)
      scene.add(gltf.scene)
      scene.background = new THREE.Color(300,300,300);
      mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;
      const RightDoorOpen = THREE.AnimationClip.findByName(clips, 'ArmatureAction')
      const LeftDoorOpen = THREE.AnimationClip.findByName(clips, 'Armature.001Action')
      const BookScale = THREE.AnimationClip.findByName(clips, 'BookAction.001')
      const actionRightDoor = mixer.clipAction(RightDoorOpen)
      const actionLeftDoor = mixer.clipAction(LeftDoorOpen)
      const actionBook = mixer.clipAction(BookScale)
      actionRightDoor.setLoop(THREE.LoopOnce)
      actionRightDoor.clampWhenFinished = true;
      actionLeftDoor.setLoop(THREE.LoopOnce)
      actionLeftDoor.clampWhenFinished = true;
      actionBook.setLoop(THREE.LoopOnce)
      actionBook.clampWhenFinished = true;
      door1Animations.push(actionLeftDoor, actionRightDoor, actionBook)
    })
  }


//Sizes 
const getWindowSizes = () => {
  sizes = {
    width: window.innerWidth *.991406,
    height : window.innerHeight / 1.3,
  }
}

const Lighting = () => {
  //Light
  const light = new THREE.PointLight(0xffffff,  50, 100)
  light.position.set(10,10,10)
  scene.add(light)

  const light2 = new THREE.PointLight(0xffffff,  50, 1000)
  light2.position.set(-10,10,10)
  scene.add(light2)

  light3 = new THREE.PointLight(0xffffff, 500, 100)
  light3.position.set(0,0,20)
  scene.add(light3)

  // const spotLightHelper = new THREE.SpotLightHelper( light3 );
  // scene.add( spotLightHelper );

  const light4 = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light4)

}

const CameraRenderer = (className) => {
  //Camera (Field of View, Aspect Ration, near and far clipping view)
  camera = new THREE.PerspectiveCamera(20, (sizes.width/sizes.height), 0.1, 100)
  camera.position.z = 30
  scene.add(camera)

  //Renderer
  canvas = document.querySelector('.' + className)

  renderer =  new THREE.WebGLRenderer({ canvas })
  renderer.setSize(sizes.width,sizes.height);
  renderer.setPixelRatio(2)
  renderer.render(scene, camera)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
}

// //Resize
window.addEventListener('resize',  () => {
  getWindowSizes()
  //update  camera
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)
  camera.updateProjectionMatrix()
})



const loop = () => {
  // controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
}


// const tl = gsap.timeline({
//   defaults:{
//     duration: 1,
//   }
// })

function animate() {
    if(mixer)
        mixer.update(clock.getDelta());
    renderer.render(scene, camera);
}
</script>

<template>
  <canvas  @click="Open()" :class="className" ref="canvas" style="width: 100%; height: 100%;"></canvas>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,html{
  overflow-x: hidden;
}

/* .webgl {
  width: 100%;
} */

nav {
  color: white;
  z-index: 2;
  position: relative;
  padding: 4rem 8rem;
  display: flex;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 4rem;
}

.title {
  color: white;
  z-index: 2;
  position: absolute;
  font-size: 3rem;
  left:  50%;
  top: 80%;
  transform: translate(-50%, -75%);
}
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>

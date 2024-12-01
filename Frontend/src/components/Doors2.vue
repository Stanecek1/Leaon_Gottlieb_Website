<script>
import { ref, onMounted } from 'vue';
import * as THREE  from 'three';
import '../assets/style.css';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import { gsap } from 'gsap';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';

export default {
  
  props: {
    size: Number,
    path: String,
    className: String
  },
  methods: {
    Open() {
        scene.remove(textMesh1)
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

let size = null;
let textMesh1, textGeo, materials;
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

const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
  createText()
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

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

function createText() {
  const loader = new FontLoader();
  loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function ( response ) {
    textGeo = new TextGeometry( 'Click To Reveal', {
        font:response,
        size: .3,
        height: .25,
        
      } );

    materials = [
        new THREE.MeshPhongMaterial( { color: 'Black', flatShading: false,  } ), // front
        new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
      ];
    textMesh1 = new THREE.Mesh( textGeo, materials );

    textMesh1.position.x = -1.5;
    textMesh1.position.y = -.25;
    textMesh1.position.z = 10;
    scene.add(textMesh1)
  } );
}

//load model
const doorSetup = () => {
    const loader = new GLTFLoader(manager);
    loader.load( path, function ( gltf ) {
      gltf.scene.position.set(0,-5,1.5)
      scene.add(gltf.scene)
      scene.background = new THREE.Color(300,300,300);
      //animation section
      mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;
      //find animations in blender export
      const RightDoorOpen = THREE.AnimationClip.findByName(clips, 'ArmatureAction')
      const LeftDoorOpen = THREE.AnimationClip.findByName(clips, 'Armature.001Action')
      const BookScale = THREE.AnimationClip.findByName(clips, 'BookAction.001')
      //set animations as actions
      const actionRightDoor = mixer.clipAction(RightDoorOpen)
      const actionLeftDoor = mixer.clipAction(LeftDoorOpen)
      const actionBook = mixer.clipAction(BookScale)
       //set animations to only play once and stop at the end instead of back at beggining
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


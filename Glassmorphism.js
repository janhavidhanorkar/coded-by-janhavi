 // Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bubbleCanvas"),
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Light
const light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0, 10, 10);
scene.add(light1);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Bubble material
const bubbleMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff88,
  roughness: 0.1,
  metalness: 0.9,
  envMapIntensity: 1,
});

const bubbles = [];

for (let i = 0; i < 10; i++) {
  const size = Math.random() * 0.6 + 0.3;
  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const bubble = new THREE.Mesh(geometry, bubbleMaterial);
  bubble.position.set(
    Math.random() * 12 - 6,
    Math.random() * 6 - 3,
    Math.random() * 6 - 3
  );
  scene.add(bubble);
  bubbles.push({ mesh: bubble, speed: 0.002 + Math.random() * 0.005 });
}

// Animate bubbles
function animate() {
  requestAnimationFrame(animate);
  bubbles.forEach((b, i) => {
    b.mesh.position.y += b.speed * Math.sin(Date.now() * 0.001 + i);
    b.mesh.rotation.y += 0.002;
  });
  renderer.render(scene, camera);
}

animate();




// GSAP animations
window.addEventListener("load", () => {
  gsap.from(".main-title", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".subhead", {
    duration: 1,
    delay: 0.4,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".desc", {
    duration: 1,
    delay: 0.7,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".glass-card", {
    duration: 1.2,
    delay: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
  });

//   gsap.from(".cta", {
//     duration: 1,
//     delay: 1.4,
//     // scale: 0.8,
//     y: 40,
//     opacity: 0,
//     // ease: "back.out(1.7)",
//     ease: "power3.out"

gsap.from(".cta", {
  duration: 1,
  delay: 1.4,
  y: 40,
  opacity: 0.5,
  ease: "power3.out",
  onStart: () => {
    const button = document.querySelector(".cta");
    button.style.display = "inline-block"; // 🛠️ force it to show
    button.style.visibility = "visible";
  }
// });


  });

});






// // Animate Team Section
// gsap.from(".section-title", {
//   scrollTrigger: {
//     trigger: ".team-section",
//     start: "top 80%", // when top of team section hits 80% of screen
//   },
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
// });

// gsap.from(".team-card", {
//   scrollTrigger: {
//     trigger: ".team-container",
//     start: "top 85%",
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   ease: "power2.out",
//   stagger: 0.3 // one after another
// });

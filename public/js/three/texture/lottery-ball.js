import * as THREE from "three";

const ballMatGreen = new THREE.MeshPhysicalMaterial({
  color: 0x006b3d,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
  // emissive: 0xffffff,
  // emissiveIntensity: 1,
});

const ballMatYellow = new THREE.MeshPhysicalMaterial({
  color: 0xfdcc0c,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
  // emissive: 0xffffff,
  // emissiveIntensity: 1,
});
const ballMatBlue = new THREE.MeshPhysicalMaterial({
  color: 0x000083,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
  // emissive: "blue",
  // emissiveIntensity: 1,
});
const ballMatRed = new THREE.MeshPhysicalMaterial({
  color: 0xa11c0f,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
  // emissive: "red",
  // emissiveIntensity: 1,
});
// const ballMatRed = new THREE.MeshStandardMaterial({
// color: 0xffffed,
// toneMapped: false,
// metalness: 1,
//   emissive: "red",
//   emissiveIntensity: 1,
// });

const glowBallMat = null;

export { ballMatGreen, ballMatYellow, ballMatBlue, ballMatRed, glowBallMat };

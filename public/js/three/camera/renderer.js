import * as THREE from "three";

// 캔버스 생성 및 랜더링 조건 설정
const params = {
  exposure: 1.0,
  toneMapping: "ACESFilmic",
  blurriness: 0.3,
  intensity: 1.0,
};
const toneMappingOptions = {
  None: THREE.NoToneMapping,
  Linear: THREE.LinearToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
  Cineon: THREE.CineonToneMapping,
  ACESFilmic: THREE.ACESFilmicToneMapping,
  Custom: THREE.CustomToneMapping,
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
// renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMapping = toneMappingOptions.Cineon;
renderer.toneMappingExposure = params.exposure;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

export { renderer };
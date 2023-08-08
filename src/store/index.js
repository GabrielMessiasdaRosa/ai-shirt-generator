import { proxy } from "valtio";

import { threejs } from "../assets";
const state = proxy({
  intro: true,
  color: "#b881ff",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: threejs,
  fullDecal: threejs,
});

export default state;

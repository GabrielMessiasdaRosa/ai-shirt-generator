import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div className="">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => {
          return (state.color = color.hex);
        }}
      />
    </div>
  );
}

export default ColorPicker;

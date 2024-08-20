import React from "react";
import { Block } from "./style";

export default function Slider() {
  return (
    <Block>
      <input id="fromSlider" type="range" defaultValue={15} min={0} max={100} />
      <input id="toSlider" type="range" defaultValue={85} min={0} max={100} />
    </Block>
  );
}

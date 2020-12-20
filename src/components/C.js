import { useState } from "react";
import { KeyboardShortcut } from "../utils/KeyboardShortcut";
import ContainerItem from "./ContainerItem";
import { getRandomColor } from "../helper";

function C() {
  const [color, setColor] = useState(getRandomColor());
  return (
    <>
      <KeyboardShortcut
        combo="ctrl c"
        callback={() => setColor(getRandomColor())}
        description="Change color for Component C"
      ></KeyboardShortcut>
      <ContainerItem style={{ backgroundColor: color }}><b>C</b></ContainerItem>
    </>
  );
}

export default C;

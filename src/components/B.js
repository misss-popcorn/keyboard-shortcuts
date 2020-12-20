import { useState } from "react";
import { KeyboardShortcut } from "../utils/KeyboardShortcut";
import ContainerItem from "./ContainerItem";
import { getRandomColor } from "../helper";

function B() {
  const [color, setColor] = useState(getRandomColor());
  return (
    <>
      <KeyboardShortcut
        combo="shift b"
        callback={() => setColor(getRandomColor())}
        description="Toggle color for Component B"
      ></KeyboardShortcut>
      <ContainerItem style={{ backgroundColor: color }}>
        <b>B</b>
      </ContainerItem>
    </>
  );
}

export default B;

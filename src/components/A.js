import { useState } from "react";
import { KeyboardShortcut } from "../utils/KeyboardShortcut";
import ContainerItem from "./ContainerItem";
import { getRandomColor } from "../helper";

function A() {
  const [color, setColor] = useState(getRandomColor());
  return (
    <>
      
        <KeyboardShortcut
          combo="ctrl a"
          callback={() => setColor(getRandomColor())}
          description="Change color for Component A"
        />
      <ContainerItem style={{ backgroundColor: color }}>
       <b>A</b>
      </ContainerItem>
    </>
  );
}

export default A;

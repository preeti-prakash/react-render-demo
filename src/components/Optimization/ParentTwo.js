import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

function ParentTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Preeti");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("prettiChannel")}>Change name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
}

export default ParentTwo;

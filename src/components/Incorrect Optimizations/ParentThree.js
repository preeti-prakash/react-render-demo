import React, { useState } from "react";
// import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

function ParentThree() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Preeti");

  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("preeti Channel")}>Change name</button>
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
}

export default ParentThree;

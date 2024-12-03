import React, { useState, useMemo, useCallback } from "react";
// import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFive } from "./ChildFive";

function ParentFour() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Preeti");

  const person = {
    fname: "Bhanu",
    lname: "KANDREG",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("preeti Channel")}>Change name</button>
      <MemoizedChildFive
        name={name}
        person={memoizedPerson}
        handleClick={memoizedHandleClick}
      />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
}

export default ParentFour;

//prps as reference

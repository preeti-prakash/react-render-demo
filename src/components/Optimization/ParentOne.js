import React, { useState } from "react";

function ParentOne({ children }) {
  const [count, setCount] = useState(0);

  console.log("ParentOne Render");
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      {children}
    </div>
  );
}

export default ParentOne;

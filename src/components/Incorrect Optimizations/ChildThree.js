import React from "react";

export const ChildThree = ({ children, name }) => {
  console.log("ChildThree render");
  return (
    <div>
      ChildThree component {children} {name}
    </div>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);

import React, { useState } from "react";

const initState = ["preeti", "Boddeti"];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    // persons.push("bhanu");
    // persons.push("junnu");
    const newPersons = [...persons];
    newPersons.push("bhanu");
    newPersons.push("junnu");
    setPersons(newPersons);
  };
  console.log("Array UseState render");
  return (
    <div>
      <button onClick={handleClick}> click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;

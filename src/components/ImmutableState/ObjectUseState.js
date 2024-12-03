import React, { useState } from "react";

const initState = {
  fname: " Preeti",
  lname: "Boddeti",
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    // person.fname = "Bhanu";
    // person.lname = "Junnu";

    const newPerson = { ...person };
    newPerson.fname = "Bhanu";
    newPerson.lname = "junnu";
    setPerson(newPerson);
  };
  console.log("Object Usestate render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;

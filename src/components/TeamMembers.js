import React from "react";

function TeamMembers({ image, name, position }) {
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {position} </p>
    </div>
  );
}

export default TeamMembers;
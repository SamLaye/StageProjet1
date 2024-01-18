import React from "react";
import user from "../assets/images/user.png";

function Stat() {
  return (
    <div className="col-4 p-2">
      <div className="bg-white bg-danger d-flex rounded p-2">
        <img
          src={user}
          alt=""
          className="d-flex stat-img align-self-center me-3"
        />
        <div>
          <h3>
            {" "}
            <span>125</span> Formulaires
          </h3>
          <p>Je ne sais pas quoi mettre</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;

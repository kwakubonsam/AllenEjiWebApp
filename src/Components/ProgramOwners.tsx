import React from "react";
import pi from "../Logos/PI.png";
import eji from "../Logos/EJII.png";
import pc from "../Logos/dinah.png";
export const PrincipalInvestigator = () => {
  return (
    <div className="border-0" style={{ width: "12rem", margin: "20px auto 0" }}>
      <img
        className="card-img-top border-0 rounded-circle"
        src={pi}
        alt={"Cardcap"}
      />
      <div className="card-body"></div>
    </div>
  );
};

export const ProgramCordinator = () => {
  return (
    <div className="border-0" style={{ width: "12rem", margin: "20px auto 0" }}>
      <img
        className="card-img-top border-0 rounded-circle "
        src={pc}
        alt={"Cardcap"}
      />
      <div className="card-body"></div>
    </div>
  );
};

export const EjiLogo = () => {
  return (
    <div className="border-0" style={{ width: "18rem", marginLeft: "6em" }}>
      <img className="card-img-top rounded-circle" src={eji} alt={"Cardcap"} />
      <div className="card-body">
        <h5 className="card-title">Environmental Justice Institute</h5>
      </div>
    </div>
  );
};

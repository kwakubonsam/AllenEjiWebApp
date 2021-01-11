import React from "react";
import { VisionComponent } from "../Components/Vision";
import { ObjectivePage } from "../Components/Objective";
import { PrincipalInvestigator } from "../Components/ProgramOwners";
import { ProgramCordinator } from "../Components/ProgramOwners";
import { AboutPage } from "../Components/About";
import { Images } from "../Components/ImageSlider";


export const Homepage = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <Images />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 style={{ textAlign: "center", marginBottom: "1em" }}>
            What is Environmental Justice Institue About
          </h3>
        </div>
      </section>
      <section>
        <div className="row" style={{ fontSize: "1.1em" }}>
          <AboutPage />
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <VisionComponent />
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <hr style={{ backgroundColor: "#21201f" }} />
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <ObjectivePage />
          </div>
        </div>
      </section>

      <section>
        <div className="row" style={{ backgroundColor: "#e8e8e8" }}>
          <div className="col-sm-6">
            <PrincipalInvestigator />
            <div>
              <h5 className="" style={{ marginLeft: "8em" }}>
                Dr. Oluwole Ariyo - Principal Investigator
              </h5>
            </div>
          </div>

          <div className="col-sm-6">
            <ProgramCordinator />
            <div>
              <h5 className="" style={{ marginLeft: "10em" }}>
                Dinah Williams - Program Cordinator
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <footer style={{ position: "static", textAlign: "center" }}>
            &copy copyright of Allen University eji
          </footer>
        </div>
      </section>
      <section></section>
    </>
  );
};

import React from "react";
import { PrincipalInvestigator } from "../Components/ProgramOwners";
import { ProgramCordinator } from "../Components/ProgramOwners";
import { AboutPage } from "../Components/About";
import { GalleryImages } from "../Components/ImageSlider";


export const Gallery = () => {
  return (
    <div style={{margin: "0px 100px"}}>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <GalleryImages/>
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
    </div>
  );
};

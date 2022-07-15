import React from "react";
import Particles from "react-tsparticles";

function ParticlesComp() {
  return (
    <div>
      <Particles
        className="particles-canvas" 
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#252525",
                }
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }

            }
          }}
      />
    </div>
  );
}

export default ParticlesComp;

import Particles from "react-particles-js";
export default function ParticleBackGround() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        position: "absolute",
        zIndex: 9,
      }}
    />
  );
}

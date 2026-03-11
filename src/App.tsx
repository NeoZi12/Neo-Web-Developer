import { Navbar } from "./components/Navbar/Navbar";
import { AuroraBackground } from "./components/AuroraBackground/AuroraBackground";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import profileImage from "./assets/profile.png";
import aboutImage from "./assets/esmeralda.jpeg";

function App() {
  return (
    <>
      <Navbar />
      <AuroraBackground showRadialGradient>
        <Hero profileImage={profileImage} />
      </AuroraBackground>
      <About aboutImage={aboutImage} />
    </>
  );
}

export default App;

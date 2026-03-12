import { Navbar } from "./components/Navbar/Navbar";
import { AuroraBackground } from "./components/AuroraBackground/AuroraBackground";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import profileImage from "./assets/profile.png";
import aboutImage from "./assets/esmeralda.jpeg";

function App() {
  return (
    <AuroraBackground showRadialGradient>
      <Navbar />
      <Hero profileImage={profileImage} />
      <About aboutImage={aboutImage} />
    </AuroraBackground>
  );
}

export default App;

import "./App.css";
import Services from "./Components/Services/Services";
import AboutMe from "./Components/AboutMe/AboutMe";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import LatestWork from "./Components/LatestWork/LatestWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Services />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

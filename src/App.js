import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Social from "./components/Social";
import SocialMobile from "./components/SocialMobile";



function App() {
  return (
    <div className="scrollbar scrollbar-thumb-teal-500 scrollbar-track-slate-100">
      <Home/>
      <Navbar/>
      <Social/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Contact/>
      <SocialMobile/>
    </div>
  );
}

export default App;

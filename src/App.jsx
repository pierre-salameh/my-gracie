import "./App.css";

import Hero from "./components/Hero";
import LoveCounter from "./components/LoveCounter";
import Gallery from "./components/Gallery";
import StarField from "./components/StarField";
import GracieStar from "./components/GracieStar";
import Timeline from "./components/Timeline";
import LoveMessage from "./components/LoveMessage";
import Constellation from "./components/Constellation";
import GracieUniverse from "./components/GracieUniverse";
import Navbar from "./components/Navbar";
import LunarTimeline from "./components/LunarTimeline";


function App() {
  return (
    <div className="app">
     <LunarTimeline/>
 
  
      <StarField />
      

      <Hero />
      
      <GracieUniverse />
      <LoveCounter />
      <Constellation />
      <Timeline />
      <Gallery />
      <LoveMessage />
      
    </div>
  );
}

export default App;
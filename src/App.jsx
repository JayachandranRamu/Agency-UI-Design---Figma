import Mob from "./assets/Mob";
import Helping from "./components/Helping";
import Hero from "./components/Hero";
import Manage from "./components/Manage";
import Manage2 from "./components/Manage2";
import Navbar from "./components/Navbar";
import OurClient from "./components/OurClient";

function App() {
  return (
    <>
    <div className="bg-Silver pt-[10px]  pb-[40px]">
    <Navbar />
      <Hero />
    </div>
  
      <OurClient />
      <Manage />
      <div className="bg-Silver py-[70px]">
      <Helping />
      </div>
      <Manage2 />
 
    </>
  );
}

export default App;

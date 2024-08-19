
import Styles from './App.module.css';
import Navbar1 from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero";
import Sectionn from './components/Section/Section.jsx';
import { MyProvider } from './components/UniversalData/universalData.jsx';
function App() {

  return (
    <MyProvider>
    <div className={Styles.App}>
      <Navbar1 />
      <Hero />
      <Sectionn/>
    </div>
    </MyProvider>
  );
}

export default App;

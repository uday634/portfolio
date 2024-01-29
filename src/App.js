import NavBar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

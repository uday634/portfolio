import NavBar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About/>
    </div>
  );
}

export default App;

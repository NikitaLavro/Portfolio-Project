import "./App.css";

//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

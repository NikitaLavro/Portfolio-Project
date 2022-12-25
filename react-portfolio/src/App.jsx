import "./App.css";

//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Skills />
      </main>
    </div>
  );
}

export default App;

import InfoPerso from "./components/InfoPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import "./App.css";

function App() {
  return (
    <main className="cv">
      <h1>Mon CV</h1>

      <InfoPerso />
      <Competences />
      <Experiences />
    </main>
  );
}

export default App;
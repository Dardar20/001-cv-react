import InfoPerso from "./components/InfoPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
function App() {
  return (
    <div className="cv">
      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  );
}

export default App;
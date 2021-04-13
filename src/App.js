import "./App.css";
import Education from "./components/sections/Education";
import GeneralInfo from "./components/sections/GeneralInfo";
import WorkExperience from "./components/sections/WorkExperience";
import Header from "./components/units/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <GeneralInfo />
      <WorkExperience />
    </div>
  );
}

export default App;

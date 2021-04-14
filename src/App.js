import "./App.css";
import Education from "./components/sections/education/Education";
import GeneralInfo from "./components/sections/GeneralInfo";
import WorkExperience from "./components/sections/WorkExperience";
import Header from "./components/units/Header";
import Sidebar from "./components/sections/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="whole-page-container">
        <Sidebar />

        <main
          className="main-section
        "
        >
          <Education />
          <GeneralInfo />
          <WorkExperience />
        </main>
      </div>
    </div>
  );
}

export default App;

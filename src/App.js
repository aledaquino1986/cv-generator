import "./App.css";
import Education from "./components/sections/education/Education";

import WorkExperience from "./components/sections/workexperience/WorkExperience";
import Header from "./components/units/Header";
import Sidebar from "./components/sections/sidebar/Sidebar";
import MainContainer from "./components/layout/MainContainer";

import WholePageContainer from "./components/layout/WholePageContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <WholePageContainer>
        <Sidebar />
        <MainContainer>
          <Education />
          {/* <GeneralInfo /> */}
          <WorkExperience />
        </MainContainer>
      </WholePageContainer>
    </div>
  );
}

export default App;

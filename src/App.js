import Education from "./components/sections/education/Education";
import WorkExperience from "./components/sections/workexperience/WorkExperience";
import Header from "./components/units/Header";
import Sidebar from "./components/sections/sidebar/Sidebar";
import MainContainer from "./components/layout/MainContainer";
import WholePageContainer from "./components/layout/WholePageContainer";
import HideButtonContextProvider from "./context/HideButtonContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HideButtonContextProvider>
        <Header />
        <WholePageContainer>
          <Sidebar />
          <MainContainer>
            <Education />

            <WorkExperience />
          </MainContainer>
        </WholePageContainer>
      </HideButtonContextProvider>
    </div>
  );
}

export default App;

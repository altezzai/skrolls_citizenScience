import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import Home from "./Pages/Home";
import ProfileContainer from "./Pages/ProfileContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <NavPanel />
        <Routes>
          <Route
            path="/"
            element={
              <div className="center-container">
                <Home />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="center-container">
                <ProfileContainer />
              </div>
            }
          />
        </Routes>
        <div className="info-panel">THIS IS INFO PANEL</div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import { RoyalityScore } from "./Components/RoyalityScore/RoyalityScore";
import { RoyalityScore } from "./Components/IdBox/IdBox";
import ProfileContainer from "./Pages/ProfileContainer";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import ProfileNavContainer from "./Components/ProfileNavContainer/ProfileNavContainer";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <NavPanel />
        <Routes>
          <Route
            path="/"
            element={<div className="center-container">THIS IS HOME</div>}
          />
          <Route
            path="/profile"
            element={
              <div className="center-container">
                {/* <Profile />
                <ProfileNavContainer />
                <ProfileDetails /> */}
                <ProfileContainer />
              </div>
            }
          />
        </Routes>
        <div className="info-panel">
          <RoyalityScore />
          <IdBox />
        </div>
      </div>
    </>
  );
}

export default App;

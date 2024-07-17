import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import Home from "./Pages/Home";
import { RoyaltyScore } from "./Components/RoyaltyScore/RoyaltyScore";
import { IdBox } from "./Components/IdBox/IdBox";
import { Followers } from "./Components/Followers/Followers";
import ProfileContainer from "./Pages/ProfileContainer";
import { Route, Routes } from "react-router-dom";

// import Profile from "./Components/Profile/Profile";
// import ProfileNavContainer from "./Components/ProfileNavContainer/ProfileNavContainer";
// import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";

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
        <div className="info-panel">
          <RoyaltyScore />
          <IdBox />
          <Followers />
        </div>
      </div>
    </>
  );
}

export default App;

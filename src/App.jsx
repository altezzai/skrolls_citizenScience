import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import ProfileContainer from "./Pages/ProfileContainer";

import Profile from "./Components/Profile/Profile";
import ProfileNavContainer from "./Components/ProfileNavContainer/ProfileNavContainer";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <NavPanel />
        <div className="center-container">
          <Profile />
          <ProfileNavContainer />
          <ProfileDetails />
        </div>
        <div className="info-panel">THIS IS INFO PANEL</div>
      </div>
    </>
  );
}

export default App;

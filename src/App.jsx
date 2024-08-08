import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import Home from "./Pages/Home";
import { RoyaltyScore } from "./Components/RoyaltyScore/RoyaltyScore";
import { IdBox } from "./Components/IdBox/IdBox";
import { Followers } from "./Components/Followers/Followers";
import ProfileContainer from "./Pages/ProfileContainer";
import { Route, Routes, useLocation } from "react-router-dom";
import NotificationPage from "./Pages/NotificationPage";
import MessagePage from "./Pages/MessagePage";

function App() {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");
  return (
    <>
      <Header />
      <div className={`main-container ${inMessagePage ? "height-set" : ""}`}>
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
            path="/messages"
            element={
              <div className="messagePage-container">
                <MessagePage />
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
          <Route
            path="/notifications"
            element={
              <div className="center-container">
                <NotificationPage />
              </div>
            }
          />
        </Routes>
        <div className={`${inMessagePage ? "hide-info-panel" : "info-panel"}`}>
          <RoyaltyScore />
          <IdBox />
          <Followers title={"Followers"} followbtnflag={true} />
        </div>
      </div>
    </>
  );
}

export default App;

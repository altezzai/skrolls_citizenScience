import "./App.css";
import { lazy, Suspense } from "react";

import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";
import { RoyaltyScore } from "./Components/RoyaltyScore/RoyaltyScore";
import { IdBox } from "./Components/IdBox/IdBox";
import { Followers } from "./Components/Followers/Followers";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const ProfileContainer = lazy(() => import("./Pages/ProfileContainer"));
const NotificationPage = lazy(() => import("./Pages/NotificationPage"));
import MessagePage from "./Pages/MessagePage";

function App() {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");
  return (
    <>
      <Header />
      <div className={`main-container ${inMessagePage ? "height-set" : ""}`}>
        <NavPanel />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
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
                <div className="center-container mx-12 max-xl:mx-3">
                  <ProfileContainer />
                </div>
              }
            />
            <Route
              path="/notifications"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <NotificationPage />
                </div>
              }
            />
          </Routes>
        </Suspense>

        <div
          className={`${
            inMessagePage ? " hidden" : "info-panel mr-12  max-xl:mr-2 w-80 h-full overflow-y-scroll scrollbar-hide pt-10 shrink-0 "
          }`}
        >
          <RoyaltyScore />
          <IdBox />
          <Followers title={"Followers"} followbtnflag={true} />
        </div>
      </div>
    </>
  );
}

export default App;

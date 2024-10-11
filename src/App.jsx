import './App.css';
import { lazy, Suspense } from 'react';

import Header from './Components/Header/Header';
import { NavPanel } from './Components/NavPanel/NavPanel';
import { RoyaltyScore } from './Components/BoxElements/RoyaltyScore';
import { IdBox } from './Components/BoxElements/IdBox';
import { Followers } from './Components/BoxElements/Followers';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const ProfileContainer = lazy(() => import('./Pages/ProfileContainer'));
const NotificationPage = lazy(() => import('./Pages/NotificationPage'));
const Communities = lazy(() => import('./Pages/Communities'));
import MessagePage from './Pages/MessagePage';
import { PostPage } from './Pages/PostPage';
import { Settings } from './Pages/Settings';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { UserProfile } from './Pages/UserProfile';
import { ForgotPassword } from './Components/ForgotPassword/ForgotPassword';
import { Toaster } from 'react-hot-toast';
import { EditProfilePage } from './Pages/EditProfilePage';

function App() {
  const location = useLocation();
  const inMessagePage =
    location.pathname.includes('/messages') ||
    location.pathname.includes('/communities') ||
    location.pathname.includes('/groups');
  const inLoginPage =
    location.pathname.includes('/login') ||
    location.pathname.includes('/register') ||
    location.pathname.includes('/forgot-password');

  return (
    <>
      <Toaster />
      {!inLoginPage && <Header />}
      <div
        className={`main-container max-md:relative ${inMessagePage || inLoginPage ? 'height-set' : ''}`}
      >
        {!inLoginPage && <NavPanel />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <Home />
                </div>
              }
            />
            <Route
              path="/post/:postId"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <PostPage />
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
              path="/userprofile/:targetUserId"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <UserProfile />
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
            <Route
              path="/communities"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <Communities />
                </div>
              }
            />
            <Route path="/groups" element={<div>groups</div>} />
            <Route
              path="/settings"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <Settings />
                </div>
              }
            />
            <Route
              path="/settings/edit_profile"
              element={
                <div className="center-container mx-12 max-xl:mx-3">
                  <EditProfilePage />
                </div>
              }
            />
          </Routes>
        </Suspense>

        {!inLoginPage && (
          <div
            className={`${
              inMessagePage
                ? 'hidden'
                : 'scrollbar-hide mr-12 flex h-full w-80 shrink-0 flex-col justify-start overflow-y-scroll pt-10 max-xl:mr-2 max-xl:min-w-60 max-xl:shrink max-xl:pt-2 max-lg:hidden'
            }`}
            style={{ scrollbarWidth: 'none' }}
          >
            <RoyaltyScore />
            <IdBox />
            <Followers title={'Followers'} followbtnflag={true} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header/Header";
import { NavPanel } from "./Components/NavPanel/NavPanel";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <NavPanel />
        <div className="body">THIS IS BODY</div>
        <div className="info-panel">THIS IS INFO PANEL</div>
      </div>
    </>
  );
}

export default App;

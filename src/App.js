import "./App.scss";
import React from "react";
import Admin from "./Screen/Admin/Admin";
import 'devextreme/dist/css/dx.light.css';
import AppNavbar from "./Components/ScreenComponents/AppNavbar/AppNavbar";
function App() {
  return (
    <div className="app_container">
      <div className="app_navbar"><AppNavbar /></div>
      <div className="app_content">
      <Admin />

      </div>
    </div>
  );
}

export default App;

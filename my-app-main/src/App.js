import React from "react";
import "./App.css";
import MyMenus from "./components/MyMenus";
import Routers from "./Routers";
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <div className="wy-app">
      <Router>
       

        <MyMenus />
        <div className="wy-app-main">
          <Routers />
        </div>
      </Router>
    </div>
  );
}

export default App;

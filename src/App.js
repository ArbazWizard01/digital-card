import React from "react";
import Info from "./components/info/Info";
import "./App.css";
import About from "./components/about/about";
import Interest from "./components/interest/interest";
import Social from "./components/social/social";

function App() {
  return (
    <div className="container">
      <div className="container-sub">
        <Info />
        <About />
        <Interest />
        <Social />
      </div>
    </div>
  );
}

export default App;

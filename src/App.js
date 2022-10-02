import React from "react";
import { Routes, Route } from "react-router-dom";
import Explores from "./components/explores/Explores";
import Header from "./components/webSide/Header";
import LeftSite from "./components/webSide/LeftSite";
import Main from "./components/webSide/Main";
import RightSite from "./components/webSide/RightSite";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <LeftSite />
          </div>
          <div>
              <Routes>
                <Route path="/" element={<Main />} exact />
                <Route path="/explore" element={<Explores />} />
              </Routes>
          </div>
          <div>
            <RightSite />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

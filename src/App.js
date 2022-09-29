import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/webSide/Header";
import LeftSide from "./components/webSide/LeftSide";
import Main from "./components/webSide/Main";
import RightSide from "./components/webSide/RightSide";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <LeftSide />
          </div>
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Main />} exact />
              </Routes>
            </Router>
          </div>
          <div>
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

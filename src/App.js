import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import LandingPage from "./pages/LandingPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

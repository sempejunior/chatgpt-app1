import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import "./styles/bootstrap-custom.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

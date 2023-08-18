import Home from "./components/home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

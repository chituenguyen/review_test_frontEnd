import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JokesHome from "./pages/JokesHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<JokesHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
  
import Nav from "./components/Nav.jsx";
import user from "./pages/Users.jsx";

function App() {


  return (
    
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<user />} />
        </Routes>
      </Router>
  
  );
}
export default App;

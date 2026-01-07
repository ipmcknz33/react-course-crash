import "./App.css";
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";  
import Nav from "./components/Nav.jsx";
import user from "./pages/Users.jsx";

function App() {


  return (
    
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users/:username" element={<User />} />
        </Routes>
      </Router>
  
  );
}
export default App;

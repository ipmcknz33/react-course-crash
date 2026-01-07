import { Link } from "react-router-dom";

function Nav() {
  return   <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/users/1">Ronaldo</Link> |{" "}
          <Link to="/users/2">Messi</Link> |{" "}
          <Link to="/users/3">David Br4gg</Link>
        </nav>
}   
export default Nav;
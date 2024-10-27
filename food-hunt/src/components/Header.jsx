import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [login, setLogin] = useState(false);
    return (
      <div className="header">
        <div className="logo-container">
          <Link to = {"/"}><img
            className="logo" alt="logo"
            src={LOGO_URL}/></Link>
          
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li> <Link to={"/about"}> About Us</Link></li>
            <li> <Link to={"/contact"}> Contact Us </Link></li>
            <li>Cart</li>
            <li><Link to={"/grocery"}> Grocery </Link></li>
            <button className="login" onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>
          </ul>
        </div>
      </div>
    );
  };
export default Header;
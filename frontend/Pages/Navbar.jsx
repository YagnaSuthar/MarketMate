import React from "react";
import { Link , NavLink} from 'react-router-dom';
import { ShoppingCart } from "lucide-react"; // Make sure lucide-react is installed
import "../Components/Navbar.css"; // Your CSS file

const Header = () => {
  return (
    <header className="header-landingpage">
      <div className="container-landingpage">
          <div className="header-content-landingpage">
            <div className="logo-landingpage">
              <div className="logo-icon-landingpage">
                <ShoppingCart className="icon-landingpage" />
              </div>
              <span className="logo-text-landingpage">MARKETMATE</span>
            </div>
            
            <nav className="nav-landingpage">
              <a href="#" className="nav-link-landingpage">Buy</a>
              <a href="#" className="nav-link-landingpage">Sell</a>
              <a href="#" className="nav-link-landingpage">Markets</a>
              <a href="#" className="nav-link-landingpage">Business</a>
              <a href="#" className="nav-link-landingpage">Support</a>
            </nav>
            
            <div className="auth-buttons-landingpage">
              <NavLink to = {"/login"}>
              <button className="btn-landingpage btn-outline-landingpage">
                Sign in
              </button>
              </NavLink>
              <NavLink to = {"/signup"}>
              <button className="btn-landingpage btn-primary-landingpage">
                Sign up
              </button>
              </NavLink>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;

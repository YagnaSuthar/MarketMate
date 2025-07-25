import React from "react";
import { ShoppingCart } from "lucide-react"; // Make sure lucide-react is installed
import "../Components/Navbar.css"; // Your CSS file

const Header = () => {
  return (
    <header className="header-landingpage">
      <div className="container-landingpage">
        <div className="header-content-landingpage">
          {/* Logo Section */}
          <div className="logo-landingpage">
            <div className="logo-icon-landingpage">
              <ShoppingCart className="icon-landingpage" />
            </div>
            <span className="logo-text-landingpage">MARKETMATE</span>
          </div>

          {/* Navigation */}
          <nav className="nav-landingpage">
            <a href="#" className="nav-link-landingpage">Buy</a>
            <a href="#" className="nav-link-landingpage">Sell</a>
            <a href="#" className="nav-link-landingpage">Markets</a>
            <a href="#" className="nav-link-landingpage">Business</a>
            <a href="#" className="nav-link-landingpage">Support</a>
          </nav>

          {/* Authentication Buttons */}
          <div className="auth-buttons-landingpage">
            <button className="btn-landingpage btn-outline-landingpage">
              Sign in
            </button>
            <button className="btn-landingpage btn-primary-landingpage">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

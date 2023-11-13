/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);




  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                RISE TOGETHER
                <i className="fas fa-duotone fa-handshake-angle" />
              </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feeds" className="nav-links" onClick={closeMobileMenu}>
                Feeds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/leaderboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Appreciations
              </Link>
            </li>

            <li>
              <Link
                to="/guidance"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Guidance
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

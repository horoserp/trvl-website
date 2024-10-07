import React, { useState } from "react";
import { Link } from "react-router-dom";
// Steps to use Fontawsome Icons:
// 1. Add SVG Core (npm i --save @fortawesome/fontawesome-svg-core)
// 2. Add icon Packages
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// 3. Add the React Component
// npm i --save @fortawesome/react-fontawesome@latest
// 4. Import the Fontawesome Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 5. Import the specific Fontawesome icon from correct library
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            {/* Use FontAwesomeIcon component with imported icon */}
            TRVL <FontAwesomeIcon icon={faTypo3} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

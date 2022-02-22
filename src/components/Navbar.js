import React, {useState} from 'react'
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import Reorder from "@material-ui/icons/Reorder";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

  return (
    <div className="navbar" >
        <div className="leftSide" id={openLinks ? "open" : "close"} >
            <img src={Logo} alt="" />
            <div className="hiddenLinks">
                <Link to="/">About Us</Link>
                <Link to="/Project">Project Showcase</Link>
                <Link to="/Team">Team</Link>
                <Link to="/ContactUs">Contact Us</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">About Us</Link>
            <Link to="/Project">Project Showcase</Link>
            <Link to="/Team">Team</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <button onClick={toggleNavbar}>
                <Reorder />
            </button>
            
        </div>
    </div>
  );
}

export default Navbar;
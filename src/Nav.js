import React, { useEffect, useState } from 'react'
import netflix_logo from "./images/netflix_logo.png";
import avatar_logo from "./images/avatar_logo.png";
import "./Nav.css";

export default function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", handleShow(false));
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src={netflix_logo}
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src={avatar_logo}
                alt="Avatar Logo"
            />
        </div>
    )
}

import React, { useState } from 'react';
import '../Navbar.css'

export default function Navbar() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <nav>
            <img src="https://kyro.ai/images/logo_new.png" className="nav--logo" />

            <div className={`hamburger-menu btn-${!isActive ? "active" : ""}`} onClick={handleToggle}>
                <div className="icon-left"></div>
                <div className="icon-right"></div>
            </div>
        </nav>
    )
}
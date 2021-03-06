import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact element={<About />} />
            </Routes>

        </div>
    );
}

export default Body;
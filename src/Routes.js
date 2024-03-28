import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Food } from "./Pages/Food";
import { Contacts } from "./Pages/Contacts";
import { Chedule } from "./Pages/Chedule";
import { Programs } from "./Pages/Programs";

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/food" element={<Food />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/schedule" element={<Chedule />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
  );
};

export default RouterPage;
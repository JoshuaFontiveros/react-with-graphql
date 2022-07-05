import React from "react";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;

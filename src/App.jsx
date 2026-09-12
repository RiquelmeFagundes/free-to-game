import React from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import DetalhesGames from "./pages/DetalhesGames";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="game/:id" element={<DetalhesGames />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

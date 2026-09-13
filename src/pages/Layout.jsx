import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="all-content">
      <header>
        <div className="header-content">
          <h1>Free-to-Game</h1>
          <nav>
            <NavLink className="home" to="/">
              Home
            </NavLink>

            <NavLink className="sobre" to="sobre">
              Sobre
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <p>© Todos os direitos reservados | 2026 - API de Jogos</p>
      </footer>
    </div>
  );
}

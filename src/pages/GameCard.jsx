import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

export default function GameCard({ detalhes }) {
  return (
    <div className="game-card">
      <Link to={`/game/${detalhes.id}`} className="game-card-link">
        <img
          src={detalhes.thumbnail}
          alt={`Capa do jogo ${detalhes.title}`}
          className="game-card-image"
        />
      </Link>
      <div className="game-card-content">
        <h3 className="game-title">{detalhes.title}</h3>
        <p className="game-description">
          {detalhes.short_description}
        </p>
      </div>
    </div>
  );
}

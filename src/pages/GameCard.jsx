import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={`Capa do jogo ${game.title}`} />

      <div className="card-content">
        <h3>{game.title}</h3>

        <div className="tags">
          <span>{game.genre}</span>
          <span>{game.platform}</span>
        </div>
      <Link to={`/game/${game.id}`}>
        <button className="button-detalhes">Ver Detalhes</button>
      </Link>
      </div>
    </div>
  );
}

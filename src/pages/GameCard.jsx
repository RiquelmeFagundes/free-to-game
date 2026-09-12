import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ detalhes}) {
  return (
    <div className="game-card">

      <Link to={`/game/${detalhes.id}`}>
      <img src={detalhes.thumbnail} alt={`Capa do jogo ${detalhes.title}`} />
      </Link>
      <div className="card-content">
        <h3>{detalhes.title}</h3>

        <div className="tags">
          <span>{detalhes.genre}</span>
          <span>{detalhes.platform}</span>
        </div>
      </div>
    </div>
  );
}

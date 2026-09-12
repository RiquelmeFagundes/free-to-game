import React from "react";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function buscarGames() {
      const response = await fetch("https://www.freetogame.com/api/games");
      const dados = await response.json();
      setGames(dados);
    }
    buscarGames();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <GameCard game={game}></GameCard>
        </div>
      ))}
    </div>
  );
}

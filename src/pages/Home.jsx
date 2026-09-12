import React from "react";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";

export default function Home() {
  const [games, setGames] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarGames() {
      try {
        const response = await fetch("/api/games?sort-by=popularity");

        if (!response.ok) throw new Error(`Erro ${response.status}`);
        const dados = await response.json();
        setGames(dados.slice(0, 3));
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setCarregando(false);
      }
    }
    buscarGames();
  }, []);

  const [busca, setBusca] = useState("");

  function handleSearchChange(evento) {
    setBusca(evento.target.value);
  }

  const gamesFiltrados = games.filter((g) =>
    g.title.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="container-layout">
      <input type="text" value={busca} onChange={handleSearchChange} />
      <div className="principal">
        <h2>Trending games</h2>
        {carregando ? (
          <p>Carregando jogos...</p>
        ) : gamesFiltrados.length > 0 ? (
          gamesFiltrados.map((game) => (
            <GameCard key={game.id} detalhes={game} />
          ))
        ) : (
          <p>Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
}
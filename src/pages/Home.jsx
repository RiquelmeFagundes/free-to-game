import React from "react";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";

export default function Home() {
  const [games, setGames] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(12);

  useEffect(() => {
    async function buscarGames() {
      try {
        const response = await fetch("/api/games?sort-by=popularity");

        if (!response.ok) throw new Error(`Erro ${response.status}`);
        const dados = await response.json();
        setGames(dados);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setCarregando(false);
      }
    }
    buscarGames();
  }, []);

  useEffect(() => {
    function handleScroll() {
      const chegouPertoDoFim =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (chegouPertoDoFim) {
        setQuantidadeVisivel((atual) => atual + 12);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSearchChange(evento) {
    setBusca(evento.target.value);
  }

  const gamesFiltrados = games.filter((g) =>
    g.title.toLowerCase().includes(busca.toLowerCase()),
  );

  const gamesExibidos = gamesFiltrados.slice(0, quantidadeVisivel);

  return (
    <div className="container-layout">
      <input type="text" value={busca} onChange={handleSearchChange} />
      <div className="principal">
        <h2>Catálogo</h2>
        {carregando ? (
          <p>Carregando jogos...</p>
        ) : gamesExibidos.length > 0 ? (
          gamesExibidos.map((game) => (
            <GameCard key={game.id} detalhes={game} />
          ))
        ) : (
          <p>Nenhum jogo encontrado.</p>
        )}
      </div>
    </div>
  );
}
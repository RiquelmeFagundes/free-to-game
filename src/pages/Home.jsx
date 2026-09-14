import React from "react";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./Home.css"

const GENEROS = [
  { valor: "", texto: "Todos os gêneros" },
  { valor: "shooter", texto: "Shooter" },
  { valor: "mmorpg", texto: "MMORPG" },
  { valor: "strategy", texto: "Estratégia" },
  { valor: "moba", texto: "MOBA" },
  { valor: "racing", texto: "Corrida" },
  { valor: "sports", texto: "Esportes" },
  { valor: "card", texto: "Cartas" },
  { valor: "fighting", texto: "Luta" },
  { valor: "battle-royale", texto: "Battle Royale" },
];

const ORDENACOES = [
  { valor: "relevance", texto: "Relevância" },
  { valor: "popularity", texto: "Popularidade" },
  { valor: "release-date", texto: "Mais recentes" },
  { valor: "alphabetical", texto: "Ordem alfabética" },
];

export default function Home() {
  const [games, setGames] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");
  const [genero, setGenero] = useState("");
  const [ordenacao, setOrdenacao] = useState("relevance");
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(12);

  useEffect(() => {
    async function buscarGames() {
      setCarregando(true);
      try {
        const params = new URLSearchParams();
        if (genero) params.set("category", genero);
        params.set("sort-by", ordenacao);

        const response = await fetch(
          `https://www.freetogame.com/api/games?${params.toString()}`,
        );

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
  }, [genero, ordenacao]);

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

  useEffect(() => {
    setQuantidadeVisivel(12);
  }, [busca, genero, ordenacao]);

  function handleSearchChange(evento) {
    setBusca(evento.target.value);
  }

  const gamesFiltrados = games.filter((g) =>
    g.title.toLowerCase().includes(busca.toLowerCase()),
  );

  const gamesExibidos = gamesFiltrados.slice(0, quantidadeVisivel);

  return (
    <div className="container-layout">
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar jogo pelo nome..."
          value={busca}
          onChange={handleSearchChange}
        />
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          {GENEROS.map((item) => (
            <option key={item.valor} value={item.valor}>
              {item.texto}
            </option>
          ))}
        </select>
        <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
          {ORDENACOES.map((item) => (
            <option key={item.valor} value={item.valor}>
              {item.texto}
            </option>
          ))}
        </select>
      </div>

      <div className="principal">
        <h2>Catálogo de jogos grátis para PC em 2026! </h2>
        <p>416 jogos para jogar grátis encontrados na nossa lista!</p>
        <div className="grid-colunas">
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
    </div>
  );
}
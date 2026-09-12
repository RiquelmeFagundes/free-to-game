import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetalhesGames() {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        const response = await fetch(`/api/game?id=${id}`);

        if (!response.ok) throw new Error(`Erro ${response.status}`);
        const dados = await response.json();
        setJogo(dados);
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setCarregando(false);
      }
    }
    buscarDetalhes();
  }, [id]);

  if (carregando) return <p>Carregando...</p>;
  if (!jogo) return <p>Jogo não encontrado.</p>;

  return (
    <div className="detalhes-container">
      <h1>{jogo.title}</h1>
      <img src={jogo.thumbnail} alt={jogo.title} />
      <p>{jogo.description}</p>
      <p>Desenvolvedora: {jogo.developer}</p>
      <Link to="/">
        <button className="btn-pixelado">Voltar para a Home</button>
      </Link>
    </div>
  );
}
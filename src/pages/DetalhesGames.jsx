import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetalhesGames() {
  const { id } = useParams(); 
  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const targetUrl = `https://www.freetogame.com/api/game?id=${id}`;
        
        const response = await fetch(proxyUrl + targetUrl);
        const dados = await response.json();
        
        setJogo(dados);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
    buscarDetalhes();
  }, [id]);

  if (!jogo) return <p>Carregando...</p>;

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
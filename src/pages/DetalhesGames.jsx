import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DetalhesGames.css";

export default function DetalhesGames() {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        const response = await fetch(
          `https://www.freetogame.com/api/games?id=${id}`,
        );

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
      <div className="detalhes-conteudo">
        <div className="detalhes-esquerda">
          <img src={jogo.thumbnail} alt={jogo.title} />
          <Link to="/">
            <button className="button-detalhe">Voltar para a Home</button>
          </Link>
        </div>

        <div className="detalhes-direita">
          <h1>{jogo.title}</h1>
          <p>
            <strong>Desenvolvedora:</strong> {jogo.developer}
          </p>
          <br />
          <h3 className="titulo-sobre">About {jogo.title}</h3>
          <p>{jogo.description}</p>
        </div>
      </div>
    </div>
  );
}

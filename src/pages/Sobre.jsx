import React from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="sobre-container">
      <h2>Sobre o projeto</h2>
      <p>
        Este é um catálogo de jogos gratuitos desenvolvido em React, consumindo
        a API pública da FreeToGame. O projeto lista os jogos mais populares na
        página inicial, com busca em tempo real por nome, e permite ver os
        detalhes completos de cada jogo em uma página própria.
      </p>
      <p>
        Tecnologias utilizadas: React, React Router para navegação entre
        páginas, e a Fetch API para consumo de dados. O consumo da API foi
        feito com useState e useEffect, com tratamento de estado de
        carregamento durante as requisições.
      </p>
      <Link to="/">
        <button className="button-sobre">Voltar para a Home</button>
      </Link>
    </div>
  );
}
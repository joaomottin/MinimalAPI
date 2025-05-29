import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Prato } from '../../models/Prato';

function ListaPratos() {

  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5163/api/pratos")
      .then(response => {
        setPratos(response.data);
      })
      .catch(err => {
        console.error("Erro ao buscar pratos:", err);
        alert("Erro ao buscar pratos.");
      });
  }, []);

  return (
    <div className="teste">
      <h1>Lista de Pratos</h1>

      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nome</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Restaurante</td>
          </tr>
        </thead>
        <tbody>
          {pratos.map((prato) => (
            <tr key={prato.id}>
              <td>{prato.id}</td>
              <td>{prato.nome}</td>
              <td>{prato.descricao}</td>
              <td>R$ {prato.preco.toFixed(2)}</td>
              <td>{prato.restaurante?.nome ?? 'Não informado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPratos;

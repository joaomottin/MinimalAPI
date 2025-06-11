import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prato } from '../../models/Prato';
import '../../Style.css';

export default function ListaPratos() {
  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/pratos')
      .then((response) => {
        setPratos(response.data);
      })
      .catch((err) => {
        console.error('Erro ao buscar pratos:', err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Pratos Cadastrados</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
            <th>Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {pratos.length === 0 && (
            <tr>
              <td colSpan={5}>Nenhum prato encontrado.</td>
            </tr>
          )}
          {pratos.map((prato) => (
            <tr key={prato.id}>
              <td>{prato.id}</td>
              <td>{prato.nome}</td>
              <td>{prato.descricao}</td>
              <td>{prato.preco.toFixed(2)}</td>
              <td>{prato.restaurante?.nome ?? 'Não informado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

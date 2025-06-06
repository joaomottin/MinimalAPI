import React, { useState } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import '../../Style.css';

export default function RestauranteForm() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoRestaurante: Partial<Restaurante> = { nome, endereco, telefone };
    axios
      .post('http://localhost:5163/api/restaurantes', novoRestaurante)
      .then(() => {
        alert('Restaurante cadastrado com sucesso!');
        setNome('');
        setEndereco('');
        setTelefone('');
      })
      .catch((err) => {
        console.error('Erro ao cadastrar restaurante:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Cadastrar Restaurante</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

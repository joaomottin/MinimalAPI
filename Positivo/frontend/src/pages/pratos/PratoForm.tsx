import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import '../../Style.css';

export default function PratoForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);
  const [restauranteId, setRestauranteId] = useState<number | ''>('');
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((response) => setRestaurantes(response.data))
      .catch((err) => console.error('Erro ao buscar restaurantes:', err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (restauranteId === '') {
      alert('Selecione um restaurante válido.');
      return;
    }
    const novoPrato = { nome, descricao, preco, restauranteId };
    axios
      .post('http://localhost:5163/api/pratos', novoPrato)
      .then(() => {
        alert('Prato cadastrado com sucesso!');
        setNome('');
        setDescricao('');
        setPreco(0);
        setRestauranteId('');
      })
      .catch((err) => {
        console.error('Erro ao cadastrar prato:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Cadastrar Prato</h2>
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
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Preço (R$):</label>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Restaurante:</label>
        <select
          value={restauranteId}
          onChange={(e) =>
            setRestauranteId(e.target.value === '' ? '' : Number(e.target.value))
          }
          required
        >
          <option value="">Selecione</option>
          {restaurantes.map((r) => (
            <option key={r.id} value={r.id}>
              {r.nome}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

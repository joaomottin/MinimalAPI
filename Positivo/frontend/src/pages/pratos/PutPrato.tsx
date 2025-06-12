import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import { Prato } from '../../models/Prato'; 
import '../../Style.css';

interface PutPratoProps {
  pratoId: number;
  onUpdated: () => void; // callback para avisar que o prato foi atualizado
}

export default function PutPrato({ pratoId, onUpdated }: PutPratoProps) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);
  const [restauranteId, setRestauranteId] = useState<number | ''>('');
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar lista de restaurantes
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((response) => setRestaurantes(response.data))
      .catch((err) => console.error('Erro ao buscar restaurantes:', err));
  }, []);

  useEffect(() => {
    if (!pratoId) return;

    // Buscar dados do prato para preencher o formulário
    setLoading(true);
    axios
      .get(`http://localhost:5163/api/pratos/${pratoId}`)
      .then((response) => {
        const prato: Prato = response.data;
        setNome(prato.nome);
        setDescricao(prato.descricao);
        setPreco(prato.preco);
        setRestauranteId(prato.restaurante?.id ?? '');
      })
      .catch((err) => console.error('Erro ao buscar prato:', err))
      .finally(() => setLoading(false));
  }, [pratoId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (restauranteId === '') {
      alert('Selecione um restaurante válido.');
      return;
    }
    const pratoAtualizado = { nome, descricao, preco, restauranteId };
    axios
      .put(`http://localhost:5163/api/pratos/${pratoId}`, pratoAtualizado)
      .then(() => {
        alert('Prato atualizado com sucesso!');
        onUpdated();
      })
      .catch((err) => {
        console.error('Erro ao atualizar prato:', err);
      });
  };

  if (loading) return <p>Carregando prato...</p>;

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Editar Prato</h2>
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
      <button type="submit">Atualizar</button>
    </form>
  );
}

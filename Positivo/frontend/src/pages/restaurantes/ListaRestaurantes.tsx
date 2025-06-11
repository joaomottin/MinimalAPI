import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';
import '../../Style.css';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detalhe, setDetalhe] = useState<Restaurante | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((response) => {
        setRestaurantes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurantes:', err);
        setError('Falha ao carregar restaurantes.');
        setLoading(false);
      });
  }, []);

  const buscarDetalhe = async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:5163/api/restaurantes/${id}`);
      setDetalhe(res.data);
    } catch {
      setError('Erro ao carregar detalhes do restaurante');
    }
  };

  return (
    <main className="container">
      <h1>Restaurantes Cadastrados</h1>

      {loading && <p>Carregando restaurantes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && restaurantes.length === 0 && (
        <p style={{ fontStyle: 'italic' }}>Nenhum restaurante encontrado.</p>
      )}

      {!loading && !error && restaurantes.length > 0 && (
        <>
          {restaurantes.map(({ id, nome, endereco, telefone }) => (
            <section key={id} className="card" onClick={() => buscarDetalhe(id)}>
              <h3>{nome}</h3>
              <p>📍 {endereco || 'Endereço não informado'}</p>
              <p>☎️ {telefone || 'Telefone não informado'}</p>
            </section>
          ))}
        </>
      )}

      {detalhe && (
        <aside className="modal-overlay" onClick={() => setDetalhe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setDetalhe(null)}>×</button>
            <h3>{detalhe.nome}</h3>
            <p><strong>Endereço:</strong> {detalhe.endereco || 'Não informado'}</p>
            <p><strong>Telefone:</strong> {detalhe.telefone || 'Não informado'}</p>
          </div>
        </aside>
      )}
    </main>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';

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
      alert('Erro ao carregar detalhes do restaurante');
    }
  };

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2">
        Restaurantes Cadastrados
      </h3>

      {loading ? (
        <p className="text-center text-gray-500">Carregando restaurantes...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : restaurantes.length === 0 ? (
        <p className="text-center text-gray-500 italic">Nenhum restaurante encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantes.map(({ id, nome, endereco, telefone }) => (
            <article
              key={id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => buscarDetalhe(id)}
            >
              <h4 className="text-lg font-semibold text-blue-700 mb-2 truncate">{nome}</h4>
              <p className="text-sm text-gray-600">📍 {endereco || 'Endereço não informado'}</p>
              <p className="text-sm text-gray-600">☎️ {telefone || 'Telefone não informado'}</p>
            </article>
          ))}
        </div>
      )}

      {detalhe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setDetalhe(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-blue-700">{detalhe.nome}</h3>
            <p><strong>Endereço:</strong> {detalhe.endereco || 'Não informado'}</p>
            <p><strong>Telefone:</strong> {detalhe.telefone || 'Não informado'}</p>
            {/* Se sua API retornar mais campos, mostre aqui */}
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurante } from '../../models/Restaurante';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5163/api/restaurantes')
      .then((response) => setRestaurantes(response.data))
      .catch((err) => console.error('Erro ao buscar restaurantes:', err));
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">
        Restaurantes Cadastrados
      </h3>

      {restaurantes.length === 0 ? (
        <p className="text-gray-500 text-center italic">Nenhum restaurante encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantes.map((restaurante) => (
            <div
              key={restaurante.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-200"
            >
              <h4 className="text-lg font-semibold text-blue-700 mb-1">
                {restaurante.nome}
              </h4>
              <p className="text-sm text-gray-600">
                📍 {restaurante.endereco || 'Endereço não informado'}
              </p>
              <p className="text-sm text-gray-600">
                ☎️ {restaurante.telefone || 'Telefone não informado'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

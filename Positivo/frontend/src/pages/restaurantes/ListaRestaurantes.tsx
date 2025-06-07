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
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Restaurantes Cadastrados
      </h3>

      {restaurantes.length === 0 ? (
        <p className="text-gray-500">Nenhum restaurante encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurantes.map((restaurante) => (
            <div
              key={restaurante.id}
              className="bg-white border border-gray-200 rounded p-4 shadow hover:shadow-md transition"
            >
              <h4 className="text-blue-700 font-bold text-lg">
                {restaurante.nome}
              </h4>
              <p className="text-sm text-gray-600">{restaurante.endereco}</p>
              <p className="text-sm text-gray-600">{restaurante.telefone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

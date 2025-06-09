import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IPrato from '../../models/Prato';

const ListaPratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pratos/')
      .then(response => setPratos(response.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-2xl font-bold text-gray-800">Lista de Pratos</h2>
        <Link
          to="/pratos/novo"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition shadow"
        >
          + Novo
        </Link>
      </div>

      {pratos.length === 0 ? (
        <p className="text-gray-500 italic">Nenhum prato cadastrado.</p>
      ) : (
        <ul className="space-y-4">
          {pratos.map(p => (
            <li
              key={p.id}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-md transition flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">{p.nome}</p>
              </div>
              <Link
                to={`/pratos/${p.id}`}
                className="text-blue-600 font-medium hover:underline transition"
              >
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaPratos;

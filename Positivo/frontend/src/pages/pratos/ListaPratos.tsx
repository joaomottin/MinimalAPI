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
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Pratos</h2>
        <Link to="/pratos/novo" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Novo</Link>
      </div>
      <ul className="space-y-2">
        {pratos.map(p => (
          <li key={p.id} className="bg-white shadow p-4 rounded-md flex justify-between items-center">
            <span>{p.nome}</span>
            <Link to={`/pratos/${p.id}`} className="text-blue-600 hover:underline">Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPratos;

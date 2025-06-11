import React from 'react';
import RestauranteForm from './pages/restaurantes/RestauranteForm';
import ListaRestaurantes from './pages/restaurantes/ListaRestaurantes';
import PratoForm from './pages/pratos/PratoForm';
import ListaPratos from './pages/pratos/ListaPratos';
import './index.css'; // Tailwind CSS

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Gerenciamento de Restaurantes e Pratos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Cadastrar Restaurante</h2>
          <RestauranteForm />
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Lista de Restaurantes</h2>
          <ListaRestaurantes />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Cadastrar Prato</h2>
          <PratoForm />
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Lista de Pratos</h2>
          <ListaPratos />
        </div>
      </div>
    </div>
  );
}

export default App;

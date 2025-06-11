import React from 'react';
import ListaRestaurantes from './pages/restaurantes/ListaRestaurantes';
import PratoForm from './pages/pratos/PratoForm';
import ListaPratos from './pages/pratos/ListaPratos';
import './Style.css';

function App() {
  return (
    <div className="container">
      <h1>Gerenciamento de Restaurantes e Pratos</h1>

      <section>
        <ListaRestaurantes />
      </section>

      <hr />

      <section>
        <PratoForm />
        <ListaPratos />
      </section>
    </div>
  );
}

export default App;

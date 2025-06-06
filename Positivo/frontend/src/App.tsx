import React from 'react';
<<<<<<< HEAD
import RestauranteForm from './pages/restaurantes/RestauranteForm';
import ListaRestaurantes from './pages/restaurantes/ListaRestaurantes';
import PratoForm from './pages/pratos/PratoForm';
import ListaPratos from './pages/pratos/ListaPratos';
import './Style.css';

function App() {
  return (
    <div className="container">
      <h1>Gerenciamento de Restaurantes e Pratos</h1>

      <section>
        <RestauranteForm />
        <ListaRestaurantes />
      </section>

      <hr />

      <section>
        <PratoForm />
        <ListaPratos />
      </section>
=======
//import Header from './components/Header';
//import Footer from './components/Footer';
import ListaPratos from './pages/pratos/ListaPratos';
//import CadastrarProdutos from './pages/produtos/CadastrarProdutos';

function App() {
  return (
    <div>
      {/*<Header />*/}
      
        <ListaPratos />
        {/* <CadastrarProdutos /> */}
        
      {/*<Footer />*/}
>>>>>>> origin/main
    </div>
  );
}

export default App;

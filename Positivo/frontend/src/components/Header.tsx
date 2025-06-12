import React from 'react';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#004080',
        color: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.8rem' }}>🍽️</span>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
          Sistema de Restaurantes
        </h1>
      </div>
      <nav>
        <button
          style={{
            backgroundColor: '#0099ff',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#007acc')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0099ff')}
        >
          Home
        </button>
      </nav>
    </header>
  );
}

export default Header;

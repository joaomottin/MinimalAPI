import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        borderTop: '1px solid #ccc',
        marginTop: '40px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#555',
      }}
    >
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/joaomottin/MinimalAPI"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#555', textDecoration: 'underline', cursor: 'pointer' }}
          title="Repositório do código"
        >
          Alunos
        </a>
        : João Mottin, Iago Mayer, Cadu Magaton e Ademir Scarpim
      </p>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

  const homePath = import.meta.env.DEV ? '/' : '/FitLife-With-Vatsa/';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0' }}>
        Sorry, we can’t find that page.
      </p>
      <Link to={homePath} style={{
        display: 'inline-block',
        padding: '0.75em 1.5em',
        background: '#007acc',
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: '600'
      }}>
        ← Back to Home
      </Link>
    </div>
  );
}
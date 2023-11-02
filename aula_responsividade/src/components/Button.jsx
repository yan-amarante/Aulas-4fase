import React from 'react';
import '../styles/styles.scss';

export default function Button({ label }) {
  return (
    <button className="button">
      {label}
    </button>
  );
}

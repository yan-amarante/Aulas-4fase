import React from 'react';
import '../styles/styles.scss';

export default function ItemImg({ src }) {
  return (
    <div className="item-img four-column content">
      <img src={src} />
    </div>
    
  );
}

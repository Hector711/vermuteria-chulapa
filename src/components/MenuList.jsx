import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuList({ menu }) {
  return menu.map((section, i) => (
    <ul className='section-menu' key={i}>
      <li className='row'>
        <h3>{section[0]}</h3>
        <p>Terraza</p>
        <p>Salón</p>
      </li>
      <hr />
      {section[1].map((item, i) => (
        <li key={i} >
          <Link to={`/menu/${item.id}`} className='row item-menu'>
            <h6>{item.nombre}</h6>
            <p>{item.precio_salon.toFixed(2)}€</p>
            <p>{item.precio_terraza.toFixed(2)}€</p>
          </Link>
        </li>
      ))}
    </ul>
  ));
}

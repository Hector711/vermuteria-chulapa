import React from 'react';

export default function MenuList({menu}) {
  return menu.map((item, i) => (
    <ul className='accordions' key={i}>
      <li className='row'>
        <h3 className='text-[1.1rem] font-bold uppercase'>{item[0]}</h3>
        <span>Terraza</span>
        <span>Salón</span>
      </li>
      {item[1].map((item, i) => (
        <li key={i} className='row'>
          <h6>{item.nombre}</h6>
          <p>{item.precio_salon}</p>
          <p>{item.precio_terraza}</p>
        </li>
      ))}
    </ul>
  ));
}


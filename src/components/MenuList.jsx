import React from 'react';

export default function MenuList({menu}) {
  return menu.map((item, i) => (
    <ul className='section-menu' key={i}>
      <li className='row'>
        <h3 className='text-[1.1rem] font-bold uppercase'>{item[0]}</h3>
        <p className='red'>Terraza</p>
        <p className='red'>Salón</p>
      </li>
      {item[1].map((item, i) => (
        <li key={i} className='row'>
          <h6 className='blue'>{item.nombre}</h6>
          <p className='blue'>{item.precio_salon}</p>
          <p className='blue'>{item.precio_terraza}</p>
        </li>
      ))}
    </ul>
  ));
}


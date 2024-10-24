import { Link } from 'react-router-dom';
import { MenuItems } from '@/types';

export default function MenuList({ menu }: { menu: MenuItems }) {
  return menu.map((section, i) => (
    <ul className='section-menu' key={i}>
      <li className='row title-row'>
        <h3 className='special-title'>{section[0]}</h3>
        <p>Terraza</p>
        <p>Salón</p>
      </li>
      <hr />
      {section[1].map((item, i) => (
        <li key={i} >
          <Link  
          to={`/menu/${item.id}`} 
          className='row item-menu'>
            <h4>{item.nombre}</h4>
            <p>{item.precio_terraza ? item.precio_terraza.toFixed(2) : '--'}€</p>
            <p>{item.precio_salon ? item.precio_salon.toFixed(2) : '--'}€</p>
          </Link>
        </li>
      ))}
    </ul>
  ));
}

import { Link } from 'react-router-dom';

export default function SpecialItemButton({title, src, to}) {
  return (
    <Link 
    className='special-item-slide shadoww' 
    to={to}>
      <header>
        <h4>{title}</h4>
      </header>
      <figure>
        <img src={src} className='shadoww' />
        {/* {props.subtitle && <p>{props.subtitle}</p>} */}
      </figure>
    </Link>
  );
}

import { Link } from 'react-router-dom';

export default function SpecialItemButton(props) {
  return (
    <Link 
    className='special-item-slide shadoww' 
    {...props} to={props.to}>
      <header>
        <h4>{props.title}</h4>
      </header>
      <figure>
        <img src={props.img} className='shadoww' />
        {props.subtitle && <p>{props.subtitle}</p>}
      </figure>
    </Link>
  );
}

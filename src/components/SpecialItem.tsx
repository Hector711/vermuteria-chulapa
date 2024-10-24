import { Link } from 'react-router-dom';

export default function SpecialItem(props: {
  title: string;
  img: string ;
  subtitle?: string;
  to?: any;
}) {
  const content = (
    <>
      <header>
        <h4>{props.title}</h4>
      </header>
      <figure>
        <img src={props.img ?? ''} className='shadoww ' />
        {props.subtitle && <p>{props.subtitle}</p>}
      </figure>
    </>
  );

  return props.to ? (
    <Link className='special-item-slide shadoww' to={`/lomejor/${props.to}`}>
      {content}
    </Link>
  ) : (
    <div className='special-item-slide shadoww'>
      {content}
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function WideButton(props) {
  if (props.href) {
    return (
      <a className='wide-button-component' {...props} href={props.href} >
        <h4>{props.title}</h4>
        {props.subtitle && <p>{props.subtitle}</p>}
      </a>
    );
  } else if (props.to) {
    return (
      <Link className='wide-button-component' {...props} to={props.to} >
        <h4>{props.title}</h4>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Link>
    );
  } else {
    return (
      <button className='wide-button-component' {...props}>
        <h4>{props.title}</h4>
        {props.subtitle && <p>{props.subtitle}</p>}
      </button>
    );
  }
}

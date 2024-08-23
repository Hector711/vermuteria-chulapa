import { Link } from 'react-router-dom';

export default function WideButton(props) {
  if (props.href) {
    return (
      <a className='wide-button-component' {...props} href={props.href}>
        <header>
          {props.icon && props.icon}
          <h4>{props.title}</h4>
        </header>
        {props.subtitle && <p>{props.subtitle}</p>}
      </a>
    );
  } else if (props.to) {
    return (
      <Link className='wide-button-component' {...props} to={props.to}>
        <header>
          {props.icon && props.icon}
          <h4>{props.title}</h4>
        </header>
        <footer>
          {props.img && <img src={props.img} />}
        {props.subtitle && <p>{props.subtitle}</p>}
        </footer>
      </Link>
    );
  } 
  // else {
  //   return (
  //     <button className='wide-button-component' {...props}>
  //       <header>
  //         {props.icon && props.icon}
  //         <h4>{props.title}</h4>
  //       </header>
  //       {props.subtitle && <p>{props.subtitle}</p>}
  //     </button>
  //   );
  // }
}

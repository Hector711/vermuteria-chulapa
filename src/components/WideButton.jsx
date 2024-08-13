export default function WideButton(props) {
  if (props.link) {
    return (
      <a className='wide-button-component' {...props} href={props.link} >
        <h4>{props.title}</h4>
        {props.subtitle && <p>{props.subtitle}</p>}
      </a>
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

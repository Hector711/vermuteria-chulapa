
export default function WideButton(props) {
  return (
    
    <button className='wide-button-component' {...props}>
      <h4>
      {props.title}
      </h4>
      <p>{props.subtitle}</p>
    </button>
  )
}

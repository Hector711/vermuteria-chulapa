
export default function WideButton(props) {
  return (
    <button className='wide-button-component' {...props}>
      {props.children}
    </button>
  )
}

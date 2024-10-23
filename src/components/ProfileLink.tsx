export default function ProfileLink(props) {
  return (
    <a href={props.href} target='_blank' className='profile-link-component shadoww'>
      {props.children}
    </a>
  );
}

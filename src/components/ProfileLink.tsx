export default function ProfileLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' className='profile-link-component shadoww'>
      {children}
    </a>
  );
}

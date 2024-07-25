import { useNavigate } from 'react-router-dom';
import Filter from '@/components/Filter';

export default function FiltersPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col px-4 gap-1 justify-center items-center animate-blink'>
      <Filter />
      <button className='m-2' onClick={ () => navigate('/menu')}>
        <p className='josefin uppercase'>Siguiente</p>
        </button>
      </div>
    </>
  );
}

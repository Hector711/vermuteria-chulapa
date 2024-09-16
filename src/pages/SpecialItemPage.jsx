import React from 'react'
import LoMejorPage from '@/pages/LoMejorPage'

export default function SpecialItemPage() {
  const { obtenerItem, item } = useMenu();
  const { itemId } = useParams();

  useEffect(() => {
    obtenerItem(itemId);
  }, [itemId]);

  return (
    <>
      <LoMejorPage />
      <div id='item-background' className='animate-blink'>
        {item ? <ItemCard item={item} /> : <p>Cargando...</p>}
      </div>
    </>
  );
}

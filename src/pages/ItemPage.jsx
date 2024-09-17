import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMenu } from '@/context/MenuContext';
import MenuPage from '@/pages/MenuPage';
import ItemCard from '@/components/ItemCard';

export default function ItemPage() {
  const { obtenerItem, item } = useMenu();
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerItem(itemId);
  }, [itemId]);

  return (
    <>
      <MenuPage />
      <div id='item-background' className='animate-blink'>
      <button onClick={() => navigate(-1)}>Volver</button>
        {item ? <ItemCard item={item} /> : <p>Cargando...</p>}
      </div>
    </>
  );
}


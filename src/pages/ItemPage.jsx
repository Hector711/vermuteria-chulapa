import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '@/context/MenuContext';
import MenuPage from '@/pages/MenuPage';
import ItemCard from '@/components/ItemCard';
import Spinner from '@/components/Spinner';

export default function ItemPage() {
  const { obtenerItem, item } = useMenu();
  const { itemId } = useParams();

  useEffect(() => {
    obtenerItem(itemId);
  }, [itemId]);

  return (
    <>
      <MenuPage />
      <div id='item-background' className='animate-blink'>
        {item ? <ItemCard item={item} /> : <Spinner />}
      </div>
    </>
  );
}


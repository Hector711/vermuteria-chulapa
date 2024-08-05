import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenu } from '@/context/MenuContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function ItemPage() {
  const { obtenerItem, item } = useMenu();
  const { itemId } = useParams();

  useEffect(() => {
    obtenerItem(itemId);
  }, [itemId]);

  return (
    <>
      {item ? <ItemCard item={item} /> : <p>Cargando...</p>}
    </>
  );
}

function ItemCard({item}) {
  return (
    <Card id='item-card'>
      <CardActions className='card-item' id='buttons-container'>
        <Button size='small'>Cerrar</Button>
      </CardActions >
      <CardMedia component='img' alt='green iguana'  image='https://picsum.photos/800/400' className='card-item'/>
      <CardContent className='card-item'>
        <h3 className='uppercase'>{item.nombre}</h3>
        <p>{item.descripcion}</p>  
        <p>Precio:</p>
        <div className='flex gap-10'>
        <p>Terraza:</p>
        <p>{item.precio_terraza}</p>
        <p>Salón:</p>
        <p>{item.precio_salon}</p>
        </div>
      </CardContent>
    </Card>
  );
}
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/icons/CloseIcon';
import Spinner from '@/components/Spinner';

export default function ItemCard({ item }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (item) {
      setIsLoaded(true);
    }
  }, [item]);

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <Card id='item-card' className='animate-fade-in-up animate-delay-200 animate-duration-800'>
      <CardActions id='buttons-container'>
        <button onClick={() => navigate(-1)}>
          <CloseIcon />
        </button>
      </CardActions>
      <CardContent id='card-content'>
        {!item.imagen && (
          <CardMedia
            component='img'
            alt='green iguana'
            image='https://picsum.photos/300/150'
            className='card-item'
          />
        )}
        <h3 className='item-title uppercase'>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        {item.ingredientes && item.ingredientes.length > 0 && (
          <div id='ingredientes-section'>
            <p>Ingredientes:</p>
            <ul id='ingredientes-container'>
              {item.ingredientes?.map(ingrediente => (
                <li key={ingrediente}>&bull; {ingrediente}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='prices-section'>
          <div className='prices'>
            <p>Precio Terraza:</p>
            <p>
              {item.precio_terraza ? item.precio_terraza.toFixed(2) : 'N/A'}€
            </p>
          </div>
          <div className='prices'>
            <p>Precio Salón:</p>
            <p>{item.precio_salon ? item.precio_salon.toFixed(2) : 'N/A'}€</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

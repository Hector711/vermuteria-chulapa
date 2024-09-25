import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

export default function ItemCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card id='item-card'>
      <CardActions className='card-item' id='buttons-container'>
        <button onClick={() => navigate(-1)}>Volver</button>
      </CardActions>
      <CardMedia
        component='img'
        alt='green iguana'
        image='https://picsum.photos/800/400'
        className='card-item'
      />
      <CardContent className='card-item card-content'>
        <h3 className='uppercase'>{item.nombre}</h3>
        <p>Descripción: {item.descripcion}</p>
        <p>Ingredientes: {item.ingredientes}</p>
        <div className='prices-container'>
          <div>
            <p>Precio Terraza:</p>
            <p>{item.precio_terraza ? item.precio_terraza.toFixed(2) : 'N/A'}€</p>
          </div>
          <div>
            <p>Precio Salón:</p>
            <p>{item.precio_salon ? item.precio_salon.toFixed(2) : 'N/A'}€</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { useState } from 'react';
import menuJsonComidas from '@/../menu-comidas.json';
import menuJsonBebidas from '@/../menu-bebidas.json';
import mainInfo from '@/../main-info.json';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [menu, setMenu] = useState('bebidas');
  const menuComidas = Object.entries(menuJsonComidas);
  const menuBebidas = Object.entries(menuJsonBebidas);

  return (
    <>
      <header>
        <h2 className='uppercase font-extrabold text-[1.1rem] text-center'>
          Vermutería
        </h2>
        <h1 className='uppercase text-center font-[800] text-[1.8rem]'>
          Chu <br /> la <br /> pa
        </h1>
        <span className='uppercase text-center'>{mainInfo.location}</span>
        <p className='text-center text-[1.2rem]'>Nuestra Carta</p>
      </header>
      <nav className='flex justify-center gap-2' id='menu-buttons'>
        <button onClick={() => setMenu('bebidas')}>Bebida</button>
        <button onClick={() => setMenu('comidas')}>Comida</button>
      </nav>

      <main>
        {menu === 'bebidas' ? (
          <> d</>
        ) : (
          menuComidas.map((item, i) => (
            <Accordion className='accordions' key={i} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='arrow-icons' />}
                className='accordion-summary'
              >
                <h3 className='text-[1.1rem] font-bold uppercase'>{item[0]}</h3>
              </AccordionSummary>
              <AccordionDetails className='list-items'>
                <div className='grid-container flex justify-between'>
                  <p className='uppercase'>Nombre</p>
                  <span className='uppercase'>Terraza</span>
                  <span className='uppercase'>Salón</span>
                </div>
                {item[1].map((item, i) => (
                  <div key={i} className='grid-container flex justify-between'>
                    <p className='uppercase'>{item.nombre}</p>
                    <p className='uppercase'>{item.precio_salon}</p>
                    <p className='uppercase'>{item.precio_terraza}</p>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        )}
        {}
      </main>
      <footer >
        <p>Pulsa aqui cuando estes listo para pedir</p>
        <button>Listo!</button>
      </footer>
    </>
  );
}

export default App;

import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import menuComidasJson from '@/../menu-comidas.json';

export default function MenuComidas() {
  const menuComidas = Object.entries(menuComidasJson);
  return (
    menuComidas.map((item, i) => (
      <Accordion className='accordions' key={i} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='arrow-icons' />}
          className='accordion-summary'
        >
          <h3 className='text-[1.1rem] font-bold uppercase'>{item[0]}</h3>
        </AccordionSummary>
        <AccordionDetails className='list-items'>
          <div className='row'>
            <h6>...</h6>
            <span>Terraza</span>
            <span>Salón</span>
          </div>
          {item[1].map((item, i) => (
            <div key={i} className='row'>
              <h6>{item.nombre}</h6>
              <p>{item.precio_salon}</p>
              <p>{item.precio_terraza}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    ))
  )
}

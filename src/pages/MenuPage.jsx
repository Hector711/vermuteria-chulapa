import React, { useEffect } from 'react';
import { useMenu } from '@/context/MenuContext';
import MenuList from '@/components/MenuList';
import Filter from '@/components/Filter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuPage() {
  const { menu, setMenu, platosOrdenados, selectedFilters, bebidasOrdenadas } =
    useMenu();
  useEffect(() => {}, [selectedFilters]);

  const isActiveBebidas = menu === 'bebidas' ? 'active' : '';
  const isActiveComidas = menu === 'comidas' ? 'active' : '';

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          className='filter-accordion'
        >
          {/* Filtro de intolerancias */}
          <h4 className='josefin text-center uppercase'>
            Filtro de intolerancias
          </h4>
        </AccordionSummary>
        <AccordionDetails className='filter-accordion'>
          <Filter />
        </AccordionDetails>
      </Accordion>
      <div className='menu'>
        <nav className='menu'>
          <button
            onClick={() => setMenu('bebidas')}
            className={isActiveBebidas}
          >
            Bebidas
          </button>
          <button
            onClick={() => setMenu('comidas')}
            className={isActiveComidas}
          >
            Comidas
          </button>
        </nav>
        <section className='menu'>
          {menu === 'bebidas' ? (
            <>
              {bebidasOrdenadas ? (
                <MenuList menu={bebidasOrdenadas} />
              ) : (
                <p>Cargando bebidas...</p>
              )}
            </>
          ) : (
            <>
              <MenuList menu={platosOrdenados} />
            </>
          )}
        </section>
      </div>
    </>
  );
}

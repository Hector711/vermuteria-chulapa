import React, { useEffect } from 'react';
import { useMenu } from '@/context/MenuContext';
import MenuList from '@/components/MenuList';
import menuBebidasJson from '@/../menu_bebidas.json';
import Filter from '@/components/Filter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuPage() {
  const menuBebidas = Object.entries(menuBebidasJson);
  const { menu, setMenu, platosOrdenados, selectedFilters } = useMenu();

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const isActiveBebidas = menu === 'bebidas' ? 'active' : '';
  const isActiveComidas = menu === 'comidas' ? 'active' : '';

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          Filtro de intolerancias
        </AccordionSummary>
        <AccordionDetails>
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
            <MenuList menu={menuBebidas} />
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

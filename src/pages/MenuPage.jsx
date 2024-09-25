import React, { useEffect, useState } from 'react';
import { useMenu } from '@/context/MenuContext';
import MenuList from '@/components/MenuList';
import Filter from '@/components/Filter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  const [menu, setMenu] = useState(() => {
    const savedMenu = localStorage.getItem('menu');
    return savedMenu ? savedMenu : 'bebidas';
  });
  const { selectedFilters, menuBebidas, menuComidas } = useMenu();

  useEffect(() => {
    localStorage.setItem('menu', menu);
  }, [selectedFilters, menu]);

  const isActiveBebidas = menu === 'bebidas' ? 'active' : '';
  const isActiveComidas = menu === 'comidas' ? 'active' : '';

  return (
    <>
      <header id='layout' className='animate-blink'>
        <Link to='/'>
          <h2 className='page-title'>Menu Chulapa</h2>
        </Link>
      </header>
      <main className='animate-blink menu-page'>
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
                {menuBebidas ? (
                  <MenuList menu={menuBebidas} />
                ) : (
                  <p>Cargando bebidas...</p>
                )}
              </>
            ) : (
              <>
                <MenuList menu={menuComidas} />
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import menuComidasJson from '@/../menu_comidas.json';
import menuBebidasJson from '@/../menu_bebidas.json';

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState('bebidas');
  const [selectedFilters, setSelectedFilters] = useState({
    Huevo: false,
    Mostaza: false,
    Gluten: false,
    Pescado: false,
    Molusco: false,
    Apio: false,
    Lacteos: false,
    'Frutos Secos': false,
  });

  const arrayIngredientes = [];
  const crearArrayIngredientes = objeto => {
    for (const ingrediente in objeto) {
      if (objeto[ingrediente]) {
        arrayIngredientes.push(ingrediente);
      }
    }
  };
  crearArrayIngredientes(selectedFilters);

  const todosLosPlatos = [];
  const crearTodosLosPlatos = objeto => {
    for (const categoria in objeto) {
      objeto[categoria].forEach(plato => {
        todosLosPlatos.push({
          ...plato,
          categoria: categoria,
        });
      });
    }
  };
  crearTodosLosPlatos(menuComidasJson);

  const platosFiltrados = [];
  const crearPlatosFiltrados = array => {
    array.map(plato => {
      if (
        !plato.ingredientes.some(ingrediente =>
          arrayIngredientes.includes(ingrediente),
        )
      ) {
        platosFiltrados.push(plato);
      }
    });
  };
  crearPlatosFiltrados(todosLosPlatos);

  const ordenarPorCategoria = platos => {
    const categorias = {};
    platos.forEach(plato => {
      if (!categorias[plato.categoria]) {
        categorias[plato.categoria] = [];
      }
      categorias[plato.categoria].push(plato);
    });

    return Object.entries(categorias).map(([categoria, platos]) => [
      categoria,
      platos,
    ]);
  };

  const platosOrdenados = ordenarPorCategoria(platosFiltrados);
  // console.log('platosOrdenados:', platosOrdenados);

  const handleCheckboxChange = event => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    // console.log('Selected Filters:', selectedFilters);
  }, [selectedFilters]);
  return (
    <MenuContext.Provider
      value={{
        menu,
        handleCheckboxChange,
        selectedFilters,
        setMenu,
        platosOrdenados
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

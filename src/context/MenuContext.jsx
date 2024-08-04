import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { getMenuComidas, getMenuBebidas, getInfo } from '@/api/supabaseClient';
import { useQuery } from '@tanstack/react-query';
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

  const handleCheckboxChange = event => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const arrayIngredientes = [];
  const crearArrayIngredientes = objeto => {
    for (const ingrediente in objeto) {
      if (objeto[ingrediente]) {
        arrayIngredientes.push(ingrediente);
      }
    }
  };
  crearArrayIngredientes(selectedFilters);

  const {
    isLoading: isLoadingComidas,
    data: menuComidas,
    error: errorComidas,
  } = useQuery({
    queryKey: ['menu_comidas'],
    queryFn: getMenuComidas,
  });

  const {
    isLoading: isLoadingBebidas,
    data: menuBebidas,
    error: errorBebidas,
  } = useQuery({
    queryKey: ['menu_bebidas'],
    queryFn: getMenuBebidas
  })

  const {
    isLoading: isLoadingInfo,
    data: info,
    error: errorInfo,
  } = useQuery({
    queryKey: ['info'],
    queryFn: getInfo
  })

  if (isLoadingComidas) {
    console.log('Cargando menu_comidas...');
  } else if (errorComidas) {
    console.error('Error al obtener menu_comidas:', errorComidas);
  }
  if (isLoadingBebidas) {
    console.log('Cargando menu_bebidas...');
  } else if (errorBebidas) {
    console.error('Error al obtener menu_bebidas:', errorBebidas);
  }
  if (isLoadingInfo) {
    console.log('Cargando info...');
  } else if (errorInfo) {
    console.error('Error al obtener info:', errorInfo);
  }

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
  menuComidas && crearPlatosFiltrados(menuComidas);
  // menuBebidas && console.log('menuBebidas:',menuBebidas)
  // menuComidas && console.log('menuComidas:',menuComidas)

  const ordenarPorCategoria = productos => {
    if (!productos || !Array.isArray(productos)) {
      return [];
    }
    const categorias = {};
    productos.forEach(prod => {
      if (!categorias[prod.categoria]) {
        categorias[prod.categoria] = [];
      }
      categorias[prod.categoria].push(prod);
    });

    return Object.entries(categorias).map(([categoria, productos]) => [
      categoria,
      productos,
    ]);
  };
  const platosOrdenados = ordenarPorCategoria(platosFiltrados);
  const bebidasOrdenadas = ordenarPorCategoria(menuBebidas)
  menuBebidas && bebidasOrdenadas 

 
  useEffect(() => {}, [selectedFilters]);
  return (
    <MenuContext.Provider
      value={{
        menu,
        handleCheckboxChange,
        selectedFilters,
        setMenu,
        platosOrdenados,
        bebidasOrdenadas,
        info
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

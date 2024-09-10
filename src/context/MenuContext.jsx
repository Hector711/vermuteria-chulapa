import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { supabase } from '@/api/supabaseClient';

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export function MenuProvider({ children }) {
  const [menuBebidas, setMenuBebidas] = useState([]);
  const [menuComidas, setMenuComidas] = useState([]);
  const [info, setInfo] = useState([]);
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

  useEffect(() => {
    getInfo();
    comidasOrdenadoFiltrado();
    bebidasOrdenadoFiltrado();
  }, [selectedFilters]);
  
  // ORDENAR Y FILTRAR PLATOS
  const comidasOrdenadoFiltrado = async () => {
    const data = await getMenuComidas();
    const itemsFiltrados = filtradoItems(data);
    setMenuComidas(ordenarPorCategoria(itemsFiltrados));
  };
  const bebidasOrdenadoFiltrado = async () => {
    const data = await getMenuBebidas();
    const itemsFiltrados = filtradoItems(data); 
    setMenuBebidas(ordenarPorCategoria(itemsFiltrados)); 
  };

  // OBTENCION DE COMIDAS
  const getMenuComidas = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_comidas')
        .select('*');
      if (error) {
        console.error('Error al obtener menu_comidas:', error);
      }
      return data;
    } catch (error) {
      console.error('Error al obtener menu_comidas:', error);
      return [];
    }
  };

  // OBTENCION DE BEBIDAS
  const getMenuBebidas = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_bebidas')
        .select('*');
      if (error) {
        console.error('Error al obtener menu_bebidas:', error);
      }
      return data;
    } catch (error) {
      console.error('Error al obtener menu_bebidas:', error);
      return [];
    }
  };

  // OBTENENCIÓN DE INFORMACION PRINCIPAL
  const getInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('informacion_principal')
        .select('*');
      if (error) {
        console.error('Error al obtener informacion_principal:', error);
      }
      // console.log(data);
      return setInfo(data[0]);
    } catch (error) {
      console.error('Error al obtener informacion_principal:', error);
      return [];
    }
  };

  // FILTRACION DE PLATOS
  const handleCheckboxChange = event => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const crearArrayIngredientes = objeto => {
    const arrayIngredientes = [];
    for (const ingrediente in objeto) {
      if (objeto[ingrediente]) {
        arrayIngredientes.push(ingrediente);
      }
    }
    return arrayIngredientes; 
  };

  const filtradoItems = array => {
    const arrayIngredientes = crearArrayIngredientes(selectedFilters); 
    return array.filter(plato => 
      !plato.ingredientes.some(ingrediente => 
        arrayIngredientes.includes(ingrediente)
      )
    );
  };

  // ORDENAR PLATOS
  function ordenarPorCategoria(productos) {
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
  }

  return (
    <MenuContext.Provider value={{ menuBebidas, menuComidas, selectedFilters, handleCheckboxChange, info }}>
      {children}
    </MenuContext.Provider>
  );
}

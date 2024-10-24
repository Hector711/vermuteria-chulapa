import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { supabase } from '@/api/supabaseClient';
import { MenuProviderProps, Item, InfoItem, MenuContextType, MenuItems } from '@/types';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const businessName = import.meta.env.VITE_BUSINESS_NAME;
const functionName = `all_${businessName}_items`;

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuBebidas, setMenuBebidas] = useState<MenuItems>([]);
  const [menuComidas, setMenuComidas] = useState<MenuItems>([]);
  const [specialItems, setSpecialItems] = useState<MenuItems>([]);
  const [mainSpecialItems, setMainSpecialItems] = useState([]);
  const [info, setInfo] = useState<InfoItem | null>(null);
  const [item, setItem] = useState<Item | null>(null);
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
    specialItemsOrdenado();
  }, [selectedFilters]);

  // ORDENAR Y FILTRAR PLATOS
  const comidasOrdenadoFiltrado = async () => {
    const data : Array<Item> | null = await getMenuComidas();
    const itemsFiltrados = filtradoItems(data);
    const itemsFiltradosOrdenados = ordenarPorCategoria(itemsFiltrados)
    setMenuComidas(itemsFiltradosOrdenados);
  };
  const bebidasOrdenadoFiltrado = async () => {
    const data = await getMenuBebidas();
    const itemsFiltrados = filtradoItems(data);
    const itemsFiltradosOrdenados = ordenarPorCategoria(itemsFiltrados)
    setMenuBebidas(itemsFiltradosOrdenados);
  };
  // FILTRADO DE PLATOS ESPECIALES
  const specialItemsOrdenado = async () => {
    const data = await getSpecialItems();
    const itemsFiltradosOrdenados = ordenarPorCategoria(data)
    setSpecialItems(itemsFiltradosOrdenados);
  };

  // OBTENCION DE COMIDAS
  const getMenuComidas = async (): Promise<Item[]> => {
    try {
      const { data, error } = await supabase
        .from(`${businessName}_comidas`)
        .select('*')
        .eq('visible', true)
        .order('order_id', { ascending: true });
      if (error) {
        console.error(`Error al obtener ${businessName}_comidas:`, error);
      }
      return data || [];
    } catch (error) {
      console.error(`Error al obtener ${businessName}_comidas:`, error);
      return [];
    }
  };

  // OBTENCION DE BEBIDAS
  const getMenuBebidas = async (): Promise<Item[]> => {
    try {
      const { data, error } = await supabase
        .from(`${businessName}_bebidas`)
        .select('*')
        .eq('visible', true)
        .order('order_id', { ascending: true });
      if (error) {
        console.error(`Error al obtener ${businessName}_bebidas:`, error);
      }
      return data || [];
    } catch (error) {
      console.error(`Error al obtener ${businessName}_bebidas:`, error);
      return [];
    }
  };

  // OBTENCIÓN DE INFORMACION PRINCIPAL
  const getInfo = async () => {
    try {
      const { data, error } = await supabase
        .from(`${businessName}_info`)
        .select('*');
      if (error) {
        console.error(`Error al obtener ${businessName}_info:`, error);
      }
      // console.log('info', data);

      // Asegúrate de que data[0] sea del tipo InfoItem
      return setInfo(data ? data[0] : null);
    } catch (error) {
      console.error(`Error al obtener ${businessName}_info:`, error);
      return null;
    }
  };

  // OBTENCIÓN DE PLATOS ESPECIALES
  const getSpecialItems = async (): Promise<Item[]> => {
    try {
      const { data, error } = await supabase.rpc(functionName);
      if (error) {
        console.error('Error al obtener platos_especiales:', error);
      }
      setMainSpecialItems(data);
      return data;
    } catch (error) {
      console.error('Error al obtener platos_especiales:', error);
      return [];
    }
  };

  // FILTRACION DE PLATOS
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const crearArrayIngredientes = (objeto: Record<string, boolean>) => {
    const arrayIngredientes = [];
    for (const ingrediente in objeto) {
      if (objeto[ingrediente]) {
        arrayIngredientes.push(ingrediente);
      }
    }
    return arrayIngredientes;
  };

  const filtradoItems = (array: Item[]): Item[] => {
    // console.log({array});
    const arrayIngredientes = crearArrayIngredientes(selectedFilters);
    return array.filter(
      plato =>
        !plato.ingredientes.some(ingrediente =>
          arrayIngredientes.includes(ingrediente),
        ),
    );
  };

  // ORDENAR PLATOS
  function ordenarPorCategoria(productos: Item[]): MenuItems {
    if (!productos || !Array.isArray(productos)) {
      return [];
    }

    const categorias: Record<string, Item[]> = {};
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

  const obtenerItem = async (itemId: string) => {
    try {
      // Buscar en la tabla _comidas
      const { data: dataComidas, error: errorComidas } = await supabase
        .from(`${businessName}_comidas`)
        .select('*')
        .eq('id', itemId)
        .single();

      if (errorComidas) {
        console.error(`No se encontro ${businessName}_comidas:`, errorComidas);
      }

      // Si se encuentra el item en _comidas, devolverlo
      if (dataComidas) {
        console.log(`Se encontro en ${businessName}_comidas`);
        setItem(dataComidas);
        return;
      }

      // Buscar en la tabla _bebidas
      const { data: dataBebidas, error: errorBebidas } = await supabase
        .from(`${businessName}_bebidas`)
        .select('*')
        .eq('id', itemId)
        .single();
      if (errorBebidas) {
        console.error(`No se encontro ${businessName}_bebidas:`, errorBebidas);
      }

      // Si se encuentra el item en _bebidas, devolverlo
      if (dataBebidas) {
        console.log(`Se encontro en ${businessName}_bebidas`);
        setItem(dataBebidas);
        return;
      }

      // Si no se encuentra el item en ninguna tabla, manejar el caso
      console.error('Item no encontrado en ninguna tabla');
      setItem(null);
    } catch (error) {
      console.error('Error al obtener el item:', error);
      setItem(null);
    }
  };

  const deleteItem = () => {
    setItem(null);
  };

  return (
    <MenuContext.Provider
      value={{
        menuBebidas,
        menuComidas,
        selectedFilters,
        handleCheckboxChange,
        specialItems,
        info,
        obtenerItem,
        item,
        mainSpecialItems,
        deleteItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;
// const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getMenuComidas = async () => {
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
export const getMenuBebidas = async () => {
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
export const getInfo = async () => {
  try {
    const { data, error } = await supabase
      .from('informacion_principal')
      .select('*');

    if (error) {
      console.error('Error al obtener informacion_principal:', error);
    }
    return data;
  } catch (error) {
    console.error('Error al obtener informacion_principal:', error);
    return [];
  }
};

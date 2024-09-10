import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const info = async () => {
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

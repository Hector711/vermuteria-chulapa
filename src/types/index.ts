export interface IconProps {
  className?: string;
  id?: string;
  stroke?: any;
}

export type MenuProviderProps = {
  children: React.ReactNode;
};

export type Item = {
  id: string;
  categoria: string;
  descripcion: string;
  estrella: boolean;
  imagen_url: string | null;
  ingredientes: string[];
  nombre: string;
  order_id: number;
  precio_salon: number;
  precio_terraza: number;
  visible: boolean;
};

export type InfoItem = {
  id: string;
  descripcion: string;
  horarios: any[];
  facebook_url: string | null;
  instagram_url: string | null;
  menu_url: string | null;
  nombre: string;
  order_id: number;
  telefono: string | null;
  ubicacion: string;
  whatsapp_url: string | null;
};

export type MenuItems = [string, Item[]][];

export interface MenuContextType {
  item: Item | null;
  menuBebidas: MenuItems;
  menuComidas: MenuItems;
  specialItems: MenuItems;
  mainSpecialItems: any[];
  selectedFilters: {
    Huevo: boolean;
    Mostaza: boolean;
    Gluten: boolean;
    Pescado: boolean;
    Molusco: boolean;
    Apio: boolean;
    Lacteos: boolean;
    'Frutos Secos': boolean;
  };
  info: InfoItem | null;
  obtenerItem: (itemId: string) => Promise<void>;
  deleteItem: () => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
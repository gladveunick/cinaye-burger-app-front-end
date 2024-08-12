export interface Burger {

  id?: number;
  nom: string;
  prix: number;
  image?: string | File;
  description?: string;
  archive?: boolean;
}

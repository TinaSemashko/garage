export type Produits = {
  id: string;
  title: string;
  id_type: number;
  annee: string;
  prix: string;
  kilometrage: string;
  id_marque: number;
  id_modele: number;
  puissance_fiscale: string;
  puissance_motor: string;
  boite_vitesse: string;
  image: string;
};

export type ProduitsUpd = {
  id: string;
  title: string;
  id_type: number;
  type: string;
  annee: string;
  prix: string;
  kilometrage: string;
  id_marque: number;
  marque: string;
  id_modele: number;
  modele: string;
  puissance_fiscale: string;
  puissance_motor: string;
  boite_vitesse: string;
  image: string;
};

export type Types = {
  id: number;
  type: string;
};

export type Marques = {
  id: number;
  type: string;
};

export type Modeles = {
  id: number;
  id_marque: string;
  type: string;
};

export type Avis = {
  id: string;
  message: string;
  note: string;
  id_user: string;
  id_produit: string;
};

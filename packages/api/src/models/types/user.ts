export type User = {
  id: string;
  nom: string;
  prenom: string;
  nickname: string;
  email: string;
  id_role: number;
  role: string;
  password: string;
};

export type Role = {
  id: number;
  role: string;
};

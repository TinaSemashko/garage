export type AuthData = {
  success: boolean;
  user: {
    user_id: string;
    email: string;
    nom: string;
    auth_token: string;
    role: string;
  };
};

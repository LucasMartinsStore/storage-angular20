export interface UserRegister {
  id: number;
  username: string;
  password: string;
  email: string;
}

export type UserPayload = Omit<UserRegister, 'id'>;

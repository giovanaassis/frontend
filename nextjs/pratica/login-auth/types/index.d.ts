declare type User = {
  id?: number;
  username?: string;
  email: string;
  password: string;
};

declare type CustomErrors = {
  path: string;
  message: string;
}
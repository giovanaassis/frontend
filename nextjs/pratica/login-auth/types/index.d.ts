declare type User = {
  id?: number;
  email: string;
  password: string;
};

declare type CustomErrors = {
  path: string;
  message: string;
}
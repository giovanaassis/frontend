declare type User = {
  id?: string;
  username?: string;
  email: string;
  password?: string;
};

declare type Session = {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
};

declare type CustomErrors = {
  path: string;
  message: string;
};

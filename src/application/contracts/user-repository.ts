import { UserModel } from 'src/domain/models/users/user';

export interface IUserRepository {
  getById: (id: number) => Promise<UserModel>;
  getByEmail: (email: string) => Promise<UserModel>;
  create: (user: UserModel) => Promise<UserModel>;
}

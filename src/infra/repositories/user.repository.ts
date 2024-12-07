import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/application/contracts/user-repository';
import { UserModel } from 'src/domain/models/users/user';
import { User } from '../entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string): Promise<UserModel> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getById(id: number): Promise<UserModel> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(data: UserModel): Promise<UserModel> {
    return await this.userRepository.save(data);
  }
}

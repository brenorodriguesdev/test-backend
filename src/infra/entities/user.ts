import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserModel } from 'src/domain/models/users/user';

@Entity('`user`')
export class User implements UserModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

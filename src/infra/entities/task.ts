import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { TaskModel } from 'src/domain/models/tasks/task';
import { User } from './user';
import { TaskStatus } from './task-status';

@Entity()
export class Task implements TaskModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => TaskStatus)
  @JoinColumn({ name: 'status_id' })
  status: TaskStatus;
}

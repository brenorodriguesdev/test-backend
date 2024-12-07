import { TaskStatusModel } from 'src/domain/models/tasks/task-status';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskStatus implements TaskStatusModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

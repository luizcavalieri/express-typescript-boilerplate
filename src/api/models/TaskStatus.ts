import { Column, Entity, OneToMany } from 'typeorm';
import { Task } from './task';

@Entity('task_status', { schema: 'public' })
export class TaskStatus {

    @Column('integer', { nullable: false, primary: true, name: 'id' })
    id: number;

    @Column('character varying', { nullable: true, length: 10, name: 'task_status_description' })
    task_status_description: string | null;

    @OneToMany(type => Task, task => task.taskStatus)
    tasks: Task[];
}

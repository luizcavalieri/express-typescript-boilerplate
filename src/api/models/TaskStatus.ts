import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Task } from './Task';

@Entity('task_status', { schema: 'public' })
export class TaskStatus {

    @PrimaryColumn('uuid')
    id: string;

    @Column('character varying', { nullable: true, length: 10, name: 'task_status_description' })
    task_status_description: string | null;

    @OneToMany(type => Task, task => task.taskStatus)
    tasks: Task[];
}

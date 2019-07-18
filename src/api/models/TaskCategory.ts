import { Column, Entity, OneToMany } from 'typeorm';
import { Task } from './Task';

@Entity('task_category', { schema: 'public' })
export class TaskCategory {

    @Column('integer', { nullable: false, primary: true, name: 'id' })
    id: number;

    @Column('character varying', { nullable: true, length: 20, name: 'task_category_description' })
    task_category_description: string | null;

    @OneToMany(type => Task, task => task.taskCategory)
    tasks: Task[];

}

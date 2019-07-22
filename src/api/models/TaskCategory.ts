import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Task } from './Task';

@Entity('task_category', { schema: 'public' })
export class TaskCategory {

    @PrimaryColumn('uuid')
    id: string;

    @Column('character varying', { nullable: true, length: 20, name: 'task_category_description' })
    taskCategoryDescription: string | null;

    @OneToMany(type => Task, task => task.taskCategory)
    tasks: Task[];

}

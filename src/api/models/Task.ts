import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TaskCategory } from './TaskCategory';
import { TaskStatus } from './TaskStatus';

@Entity('task', { schema: 'public' })
export class Task {

    @Column('integer', { nullable: false, primary: true, name: 'id' })
    public id: number;

    @Column('timestamp without time zone', { nullable: true, name: 'task_due_date' })
    task_due_date: Date | null;

    @Column('character varying', { nullable: true, length: 400, name: 'task_description' })
    task_description: string | null;

    @ManyToOne(type => TaskStatus, task_status => task_status.tasks, {})
    @JoinColumn({ name: 'task_status_id' })
    taskStatus: TaskStatus | null;

    @Column('timestamp without time zone', { nullable: true, name: 'task_start_date' })
    task_start_date: Date | null;

    @ManyToOne(type => TaskCategory, task_category => task_category.tasks, {})
    @JoinColumn({ name: 'task_category_id' })
    taskCategory: TaskCategory | null;

}

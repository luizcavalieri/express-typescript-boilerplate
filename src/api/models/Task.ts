import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TaskCategory } from './TaskCategory';
import { TaskStatus } from './TaskStatus';

@Entity('task', { schema: 'public' })
export class Task {

    @PrimaryColumn('uuid')
    public id: string;

    @Column('character varying', { nullable: true, length: 400, name: 'task_description' })
    taskDescription: string | null;

    @Column('timestamp without time zone', { nullable: true, name: 'task_start_date' })
    taskStartDate: Date | null | string;

    @Column('timestamp without time zone', { nullable: true, name: 'task_due_date' })
    taskDueDate: Date | null | string;

    @ManyToOne(type => TaskStatus, taskStatus => taskStatus.tasks, {})
    @JoinColumn({ name: 'task_status_id' })
    taskStatus: TaskStatus | null;

    @ManyToOne(type => TaskCategory, task_category => task_category.tasks, {})
    @JoinColumn({ name: 'task_category_id' })
    taskCategory: TaskCategory | null;
}

import { Field, InputType } from 'type-graphql';
import { Task } from '../../models/Task';
import { TaskCategory } from '../../models/TaskCategory';
import { TaskStatus } from '../../models/TaskStatus';

@InputType()
export class TaskInput implements Partial<Task> {

    @Field(type => String, { description: 'Description of the task.' })
    public taskDescription: string;

    @Field(type => Date, { description: 'Start date of the task.' })
    public taskStartDate: string;

    @Field(type => Date, { description: 'Due date of the task.' })
    public taskDueDate: string;

    @Field(type => String, { description: 'The status of the task.', nullable: true  })
    public taskStatus: TaskStatus | null;

    @Field(type => String, { description: 'The category of the task.', nullable: true })
    public taskCategory: TaskCategory | null;
}

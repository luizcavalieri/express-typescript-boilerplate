import { Field, ID, Int, ObjectType } from 'type-graphql';
import { TaskCategory } from '../models/TaskCategory';
import { TaskStatus } from '../models/TaskStatus';

@ObjectType({ description: 'Pet object.' })
export class Task {

    @Field(type => ID)
    public id: string;

    @Field({ description: 'Description of the task.' })
    public taskDescription: string;

    @Field({ description: 'Description of the task.', nullable: true })
    public taskStartDate: string;

    @Field({ description: 'Description of the task.', nullable: true })
    public taskDueDate: string;

    @Field(type => Int, { description: 'The status of the task.' })
    public taskStatus: TaskStatus;

    @Field(type => Int, { description: 'The category of the task.' })
    public taskCategory: TaskCategory;

}

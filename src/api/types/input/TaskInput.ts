import { Field, InputType, Int } from 'type-graphql';
import { Task } from '../../models/Task';

import { Pet } from '../Pet';

@InputType()
export class TaskInput implements Partial<Task> {

    @Field()
    public taskDescription: string;

    @Field(type => Int, {
        description: 'The age of the pet in years.',
    })
    public taskCategory: string;

}

import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Task Status object.' })
export class TaskStatus {

    @Field(type => ID)
    public id: string;

    @Field({ description: 'The name of the pet.' })
    public taskStatusDescription: string;

}

import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Task Category object.' })
export class TaskCategory {

    @Field(type => ID)
    public id: string;

    @Field({ description: 'The description of the task category.' })
    public taskCategoryDescription: string;

}

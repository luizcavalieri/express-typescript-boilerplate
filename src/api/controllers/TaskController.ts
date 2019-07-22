import {
    Authorized, Get, JsonController, OnUndefined, Param,
} from 'routing-controllers';

import { TaskNotFoundError } from '../errors/TaskNotFoundError';
import { Task } from '../models/Task';
import { TaskService } from '../services/TaskService';

@Authorized()
@JsonController('/pets')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get()
    public find(): Promise<Task[]> {
        return this.taskService.find();
    }

    @Get('/:taskDescription')
    @OnUndefined(TaskNotFoundError)
    public one(@Param('taskDescription') taskDescription: string): Promise<Task | undefined> {
        return this.taskService.findOne(taskDescription);
    }

    // @Post()
    // public create(@Body() pet: Pet): Promise<Pet> {
    //     return this.petService.create(pet);
    // }
    //
    // @Put('/:id')
    // public update(@Param('id') id: string, @Body() pet: Pet): Promise<Pet> {
    //     return this.petService.update(id, pet);
    // }
    //
    // @Delete('/:id')
    // public delete(@Param('id') id: string): Promise<void> {
    //     return this.petService.delete(id);
    // }

}

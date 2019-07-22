import { Service } from 'typedi';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Context } from '../Context';

import { Task as TaskModel } from '../models/Task';
import { TaskService } from '../services/TaskService';
import { TaskInput } from '../types/input/TaskInput';
import { Task } from '../types/Task';

@Service()
@Resolver(of => Task)
export class TaskResolver {
    constructor(
        private taskService: TaskService,
        @Logger(__filename) private log: LoggerInterface,
        // @DLoader(TaskCategoryModel)
        // private taskCategoryLoader: DataLoader<string, TaskCategoryModel>,
    ) { }

    @Query(returns => [Task])
    public async task(
        @Arg('taskDescription') taskDescription: string, @Ctx() { requestId }: Context,
    ): Promise<TaskModel> {
        this.log.info(`{${requestId}} Find task by description ${taskDescription}`);
        return await this.taskService.findOne(taskDescription);
    }

    @Mutation(returns => Task)
    public async addTask(@Arg('task') task: TaskInput): Promise<TaskModel> {
        const newTask = new TaskModel();
        newTask.taskDescription = task.taskDescription;
        newTask.taskDueDate = '2016-01-17T:08:44:29+0100';
        newTask.taskStartDate = '2016-01-17T:08:44:29+0100';
        return this.taskService.create(newTask);
    }
}

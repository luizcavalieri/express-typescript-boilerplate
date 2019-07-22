import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

// import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Task } from '../models/Task';
import { TaskRepository } from '../repositories/TaskRepository';

@Service()
export class TaskService {

    constructor(
        @OrmRepository() private taskRepository: TaskRepository,
        // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface,
    ) {
    }

    public find(): Promise<Task[]> {
        this.log.info('Find all tasks');
        return this.taskRepository.find({ relations: ['task_category', 'task_status'] });
    }

    public findOne(taskDescription: string): Promise<Task | undefined> {
        this.log.info('Find one task');
        return this.taskRepository.findTaskByDescription(taskDescription);
    }

    // public async create(user: User): Promise<User> {
    //     this.log.info('Create a new user => ', user.toString());
    //     user.id = uuid.v1();
    //     const newUser = await this.userRepository.save(user);
    //     this.eventDispatcher.dispatch(events.user.created, newUser);
    //     return newUser;
    // }
    //
    // public update(id: string, user: User): Promise<User> {
    //     this.log.info('Update a user');
    //     user.id = id;
    //     return this.userRepository.save(user);
    // }
    //
    // public async delete(id: string): Promise<void> {
    //     this.log.info('Delete a user');
    //     await this.userRepository.delete(id);
    //     return;
    // }

}

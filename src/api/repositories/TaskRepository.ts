import { EntityRepository, Repository } from 'typeorm';

import { Task } from '../models/Task';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    /**
     * Get tasks by its description
     * @param taskDescription
     * @return {Promise<Task | undefined>}
    **/
    public findTaskByDescription(taskDescription: string): Promise<Task> {
        return this.findOne({ taskDescription });
    }
}

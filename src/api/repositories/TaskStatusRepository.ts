import { EntityRepository, Repository } from 'typeorm';

import { TaskStatus } from '../models/TaskStatus';

@EntityRepository(TaskStatus)
export class TaskStatusRepository extends Repository<TaskStatus> {

}

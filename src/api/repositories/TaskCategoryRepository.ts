import {EntityRepository, Repository} from 'typeorm';

import {TaskCategory} from '../models/TaskCategory';

@EntityRepository(TaskCategory)
export class TaskCategoryRepository extends Repository<TaskCategory> {

}

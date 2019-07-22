import { EventSubscriber, On } from 'event-dispatch';

import { Logger } from '../../lib/logger';
import { Task } from '../models/Task';
import { User } from '../models/User';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserEventSubscriber {

    @On(events.user.created)
    public onUserCreate(user: User): void {
        log.info('User ' + user.toString() + ' created!');
    }

    @On(events.task.created)
    public onTaskCreate(task: Task): void {
        log.info('User ' + task.toString() + ' created!');
    }

}

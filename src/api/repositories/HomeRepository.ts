import { EntityRepository, Repository } from 'typeorm';

import { Home } from '../models/Home';

@EntityRepository(Home)
export class HomeRepository extends Repository<Home> {

}

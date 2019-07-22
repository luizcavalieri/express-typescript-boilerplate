import { EntityRepository, Repository } from 'typeorm';

import { Costumer } from '../models/Costumer';

@EntityRepository(Costumer)
export class CostumerRepository extends Repository<Costumer>  {

}

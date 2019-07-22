import { EntityRepository, Repository } from 'typeorm';

import { TenancyContract } from '../models/TenancyContract';

@EntityRepository(TenancyContract)
export class TenancyContractRepository extends Repository<TenancyContract> {

}

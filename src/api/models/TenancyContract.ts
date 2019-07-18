import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Costumer } from './Costumer';
import { Home } from './Home';

@Entity('TenancyContract', { schema: 'public' })
export class TenancyContract {

    @Column('integer', { nullable: false, primary: true, name: 'id' })
    id: number;

    @ManyToOne(type => Home, home => home.tenancyContracts, { nullable: false })
    @JoinColumn({ name: 'tenancy_contract_home_id' })
    tenancyContractHome: Home | null;

    @ManyToOne(type => Costumer, customer => customer.tenancyContracts, { nullable: false })
    @JoinColumn({ name: 'tenancy_contract_tenant_id' })
    tenancyContractTenant: Costumer | null;

    @Column('timestamp without time zone', { nullable: true, name: 'tenancy_contract_enddate' })
    tenancy_contract_enddate: Date | null;

    @Column('timestamp without time zone', { nullable: true, name: 'tenancy_contract_start_date' })
    tenancy_contract_start_date: Date | null;

}

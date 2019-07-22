import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Costumer } from './Costumer';
import { Home } from './Home';

@Entity('TenancyContract', { schema: 'public' })
export class TenancyContract {

    @PrimaryColumn('uuid')
    id: string;

    @ManyToOne(type => Home, home => home.tenancyContracts, { nullable: false })
    @JoinColumn({ name: 'tenancy_contract_home_id' })
    tenancyContractHome: Home | null;

    @ManyToOne(type => Costumer, customer => customer.tenancyContracts, { nullable: false })
    @JoinColumn({ name: 'tenancy_contract_tenant_id' })
    tenancyContractTenant: Costumer | null;

    @Column('timestamp without time zone', { nullable: true, name: 'tenancy_contract_enddate' })
    tenancyContractEndDate: Date | null;

    @Column('timestamp without time zone', { nullable: true, name: 'tenancy_contract_start_date' })
    tenancyContractStartDate: Date | null;
}

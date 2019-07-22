import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TenancyContract } from './TenancyContract';

@Entity('home', { schema: 'public' })
export class Home {

    @PrimaryColumn('uuid')
    public id: string;

    @Column('double precision', { nullable: true, precision: 53, name: 'home_rent' })
    public home_rent: number | null;

    @Column('integer', { nullable: true, name: 'home_max_tenants' })
    public home_max_tenants: number | null;

    @Column('integer', { nullable: true, name: 'home_num_bedrooms' })
    public home_num_bedrooms: number | null;

    @Column('integer', { nullable: true, name: 'home_num_toilets' })
    public home_num_toilets: number | null;

    @Column('integer', { nullable: true, name: 'home_num_livingroom' })
    public home_num_livingroom: number | null;

    @Column('integer', { nullable: true, name: 'home_num_kitchen' })
    public home_num_kitchen: number | null;

    @OneToMany(type => TenancyContract, tenancy_contract => tenancy_contract.tenancyContractHome)
    public tenancyContracts: TenancyContract[];

}

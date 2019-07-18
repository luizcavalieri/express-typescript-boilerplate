import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TenancyContract } from './TenancyContract';

@Entity('costumer', { schema: 'public' })
@Index('costumer_user_email_key', ['user_email'], { unique: true })

export class Costumer {

    @Column('integer', { nullable: false, primary: true, name: 'id' })
    public id: number;

    @Column('character varying', { nullable: true, unique: true, length: 35, name: 'user_email' })
    public user_email: string | null;

    @Column('timestamp without time zone', { nullable: true, name: 'user_dob' })
    public user_dob: Date | null;

    @Column('character varying', { nullable: true, length: 30, name: 'user_tel_mobile' })
    public user_tel_mobile: string | null;

    @OneToMany(type => TenancyContract, tenancy_contract => tenancy_contract.tenancyContractTenant)
    public tenancyContracts: TenancyContract[];
}

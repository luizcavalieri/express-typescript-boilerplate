import { Column, Entity, Index, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { TenancyContract } from './TenancyContract';
import { User } from './User';

@Entity('costumer', { schema: 'public' })
@Index('costumer_user_email_key', ['user_email'], { unique: true })

export class Costumer {

    @PrimaryColumn('uuid')
    public id: string;

    @Column('character varying', { nullable: true, unique: true, length: 35, name: 'user_email' })
        public user_email: string | null;

    @Column('timestamp without time zone', { nullable: true, name: 'user_dob' })
    public user_dob: Date | null;

    @Column('character varying', { nullable: true, length: 30, name: 'user_tel_mobile' })
    public user_tel_mobile: string | null;

    @OneToMany(type => TenancyContract, tenancyContract => tenancyContract.tenancyContractTenant)
    public tenancyContracts: TenancyContract[];

    @OneToOne(type => User, user => user.id)
    public userId: User;
}

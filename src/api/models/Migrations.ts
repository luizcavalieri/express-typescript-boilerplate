import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('migrations', { schema: 'public' })
export class Migrations {

    @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
    public id: number;

    @Column('bigint', { nullable: false, name: 'timestamp' })
    public timestamp: string;

    @Column('character varying', { nullable: false, name: 'name' })
    public name: string;
}

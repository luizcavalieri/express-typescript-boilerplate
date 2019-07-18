import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user';


@Entity('pet', { schema: 'public' })
export class Pet {

    @Column('character varying', { nullable: false, primary: true, length: 255, name: 'id' })
    public id: string;

    @Column('character varying', { nullable: false, length: 255, name: 'name' })
    public name: string;

    @Column('integer', { nullable: false, name: 'age' })
    public age: number;

    @ManyToOne(type => User, user => user.pets, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'user_id' })
    public user: User | null;
}

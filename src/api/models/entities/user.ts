import { Column, Entity, OneToMany } from 'typeorm';
import { Pet } from './pet';

@Entity('user', { schema: 'public' })
export class User {

    @Column('character varying', { nullable: false, primary: true, length: 255, name: 'id' })
    public id: string;

    @Column('character varying', { nullable: false, length: 255, name: 'first_name' })
    public first_name: string;

    @Column('character varying', { nullable: false, length: 255, name: 'last_name' })
    public last_name: string;

    @Column('character varying', { nullable: false, length: 255, name: 'email' })
    public email: string;

    @Column('character varying', { nullable: false, length: 255, name: 'username' })
    public username: string;

    @Column('character varying', { nullable: false, length: 255, name: 'password' })
    public password: string;

    @OneToMany(type => Pet, pet => pet.user, { onDelete: 'CASCADE' })
    public pets: Pet[];

}

import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Role } from "./role.entity";

@Entity("users")
export class User extends BaseEntity {
    constructor(user?: User) {
        super();
        Object.assign(this, user);
    }

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    password: string;

    @Column()
    email: string;

    @ManyToMany(() => Role, { cascade: true })
    @JoinTable()
    roles: Role[];
}

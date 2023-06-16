import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

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
    age: number;
}

import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Permission } from "./permission";
import { UserRoles } from "../types/enums";

@Entity('roles')
export class Role extends BaseEntity {
    constructor(role?: Role) {
        super();
        Object.assign(this, role);
    }

    @Column({
        type: 'enum',
        enum: UserRoles,
        default: UserRoles.USER
    })
    name: UserRoles;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions?: Permission[];

}
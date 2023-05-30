import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity('users')
export class User extends BaseEntity {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}

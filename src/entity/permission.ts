import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
    constructor(permission?: Permission) {
        super();
        Object.assign(this, permission);
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
import { AppDataSource } from '@/db/data-source';
import { IGenericRepository } from '@/interfaces/generic.repository';
import {EntityTarget, FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseRepository<T> implements IGenericRepository<T> {
    protected repository: Repository<T>;

    constructor(private entityClass: EntityTarget<T>) {
        this.repository = AppDataSource.getRepository(entityClass);
    }

    FindAll(): Promise<T[]> {
        return this.repository.find();
    }

    FindById(id: number): Promise<T | undefined> {
        return this.repository.findOne({where: {id: id} as unknown as FindOptionsWhere<T>});
    }

    Create(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    Update(id: number, entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    Delete(id: number): Promise<any> {
        return this.repository.delete(id)
    }

    protected getEntityType(): EntityTarget<T> {
        return this.entityClass;
      }

}
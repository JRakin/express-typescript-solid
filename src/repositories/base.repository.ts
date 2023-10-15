import { AppDataSource } from '@/db/data-source';
import { IGenericRepository } from '@/interfaces/generic.repository';
import { EntityTarget, FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseRepository<T> implements IGenericRepository<T> {
    protected repository: Repository<T>;

    constructor(private entityClass: EntityTarget<T>) {
        this.repository = AppDataSource.getRepository(entityClass);
    }

    async FindAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async FindById(id: number): Promise<T | undefined> {
        return await this.repository.findOne({ where: { id: id } as unknown as FindOptionsWhere<T> });
    }

    async Create(entity: T): Promise<T> {
        const createdEntity =  this.repository.create(entity);
        return await this.repository.save(createdEntity)
    }

    async Update(id: number, entity: T): Promise<T> {
        const updatedEntity = await this.repository.update(id, entity as any);
        return updatedEntity as T;
    }

    async Delete(id: number): Promise<any> {
        return await this.repository.delete(id)
    }

    protected getEntityType(): EntityTarget<T> {
        return this.entityClass;
    }

}
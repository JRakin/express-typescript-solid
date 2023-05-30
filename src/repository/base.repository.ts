import { EntityManager, FindOptionsWhere, ObjectType, Repository } from 'typeorm';

export class GenericRepository<T> {
    private repository: Repository<T>;

    constructor(entityManager: EntityManager, entityClass: ObjectType<T>) {
        this.repository = entityManager.getRepository(entityClass);
    }

    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<T | undefined> {
        return this.repository.findOneBy({id: id} as unknown as FindOptionsWhere<T>);
    }

    create(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    update(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    delete(id: number): Promise<any> {
        return this.repository.delete(id)
    }

}
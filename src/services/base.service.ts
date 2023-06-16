import { BaseEntity } from "@/entity/base.entity";
import { IGenericRepository } from "@/interfaces/generic.repository";
import { IGenericService } from "@/interfaces/generic.service";

export abstract class BaseService<Entity extends BaseEntity> implements IGenericService<Entity> {

    constructor(protected repository: IGenericRepository<Entity>) {
    }

    async Create(entity: Entity): Promise<Entity> {
        const response = await this.repository.Create(entity);
        return response;
    }

    async FindAll(): Promise<Entity[]> {
        const response = await this.repository.FindAll();
        return response;
    }

    async FindById(id?: number): Promise<Entity> {
        const response = await this.repository.FindById(id);
        return response;
    }

    async Update(id: number, entity: Entity): Promise<Entity> {
        const response = await this.repository.Update(id, entity);
        return response;
    }

    async Delete(id: number): Promise<void> {
        const response = await this.repository.Delete(id);
        return response;
    }
}

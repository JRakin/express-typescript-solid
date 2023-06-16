export interface IGenericService<Entity> {
    Create(entity: Entity): Promise<Entity>
    FindAll(): Promise<Entity[]>
    FindById(id?: number): Promise<Entity>
    Update(id: number, entity: Entity): Promise<Entity>
    Delete(id: number): Promise<void>
}
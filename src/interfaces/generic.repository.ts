export interface IGenericRepository<T> {
    FindAll: () => Promise<T[]>
    FindById: (id?: number) => Promise<T>
    Create: (entity: T) => Promise<T>
    Update: (id: number, entity: T) => Promise<T>
    Delete: (id: number) => Promise<void>
}
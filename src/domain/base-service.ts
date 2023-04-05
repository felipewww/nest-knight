export abstract class BaseService<T> {
    abstract handle(so?: { [key: string]: any }): Promise<T>
}
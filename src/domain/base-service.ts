export abstract class BaseService<T> {
    abstract handle(dto?: { [key: string]: any }): Promise<T>
}
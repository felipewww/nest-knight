export abstract class BaseEntity<DTO> {
    public abstract mountDto(): DTO
}
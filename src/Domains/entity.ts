import UniqueEntityID from 'cuid'

const isEntity = <T>(v: Entity<T>): v isEntity<T> => {
    return v.instanceof Entity
}

export abstract class Entity<T> {
    protected readonly _id: string;
    protected props: T;

    constructor(props: T, id?: string) {
        this._id = id ? id : UniqueEntityID();
        this.props = props;
    }
}
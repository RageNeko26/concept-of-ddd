import UniqueEntityID from 'cuid'

export abstract class Entitiy<T> {
    protected readonly _id: string;
    protected props: T;

    constructor(props: T, id?: string) {
        this._id = id ? id : UniqueEntityID();
        this.props = props;
    }
}
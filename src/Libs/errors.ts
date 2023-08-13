class ExtendableError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class InternalError extends ExtendableError {
    data: Record<string, unknown>

    constructor(message: string, data: Record<string, unknown>) {
        super(message);
        this.data = data;
    }
}
export class ResponseError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        Object.setPrototypeOf(this, ResponseError.prototype);

        this.status = status;
    }
}

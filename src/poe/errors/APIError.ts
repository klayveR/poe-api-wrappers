import { ResponseError } from "../../common/errors";

export class APIError extends ResponseError {
    public code: number;

    constructor(message: string, status: number, code: number) {
        super(message, status);
        Object.setPrototypeOf(this, APIError.prototype);

        this.code = code;
    }
}

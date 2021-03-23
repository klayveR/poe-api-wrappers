import { ExternalAPIError } from "./models/ExternalAPIError";

export class APIError extends Error {
    public code = 0;

    constructor(error: ExternalAPIError) {
        super(error.error.message);
        Object.setPrototypeOf(this, APIError.prototype);

        this.code = error.error.code;
    }
}

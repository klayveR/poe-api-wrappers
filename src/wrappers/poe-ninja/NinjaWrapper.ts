import { createNinjaAxiosInstance } from "@/poe-ninja/axiosInstance";
import { Wrapper } from "@/Wrapper";

export class NinjaWrapper extends Wrapper {
    public static readonly default = new this();

    constructor() {
        super(createNinjaAxiosInstance());
    }
}

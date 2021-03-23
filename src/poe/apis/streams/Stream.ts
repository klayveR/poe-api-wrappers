import { Expose } from "class-transformer";
import { Transformable } from "../../../common/classes";

export class Stream extends Transformable {
    name!: string;
    image?: string;
    status?: string;
    viewers?: number;
    id?: string;

    @Expose({ name: "url" })
    get url(): string {
        return `https://twitch.tv/${this.name.toLowerCase()}`;
    }
}

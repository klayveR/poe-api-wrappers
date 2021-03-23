import { Expose } from "class-transformer";

export class Stream {
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

export interface Response {
    data: unknown;
    status: number;
    statusText: string;
    headers: Record<string, string> & {
        "Set-Cookie"?: string[];
    };
}

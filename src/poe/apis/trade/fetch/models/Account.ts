export interface Account {
    name: string;
    lastCharacterName: string;
    online: Online | null;
    language: string;
}

export interface Online {
    league: string;
    status?: string;
}

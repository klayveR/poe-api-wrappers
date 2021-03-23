export interface Price {
    type?: string;
    amount?: number;
    currency?: string;
    exchange?: Exchange;
    item?: Item;
}

export interface Exchange {
    currency: string;
    amount: number;
}

export interface Item {
    currency: string;
    amount: number;
    stock: number;
    id: string;
}

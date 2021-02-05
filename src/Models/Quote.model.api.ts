export type Quote = {
    c: number;
    h: number;
    l: number;
    o: number;
    pc: number;
    t: number;
}

export type InternalQuote = {
    current: Quote['c'];
    open: Quote['o'];
}
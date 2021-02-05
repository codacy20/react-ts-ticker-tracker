import { InternalQuote } from "./Quote.model.api";

export enum Status {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    LOADED = 'LOADED'
}

export type ContextState = { status: Status | 'ERROR', value: InternalQuote | null };

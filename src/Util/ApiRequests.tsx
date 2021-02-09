import { Quote } from '../Models/Quote.model.api';

export const getQuoteRequests = async (params: string): Promise<Quote | undefined> => {
    const api = `https://finnhub.io/api/v1/quote?symbol=${params}&token=c049trn48v6u76cj8eog`
    try {
        const response = await fetch(api)
        const result = await response.json()
        return result;
    } catch (error) {
        if (error) {
            return error.message
        }
    }
}

export const getCandlesRequest = async (params: string): Promise<Quote | undefined> => {
    const now = Math.floor((new Date).getTime() / 1000);
    const weekAgo = Math.floor(((new Date).getTime() - 604800000) / 1000);
    const api = `https://finnhub.io/api/v1/stock/candle?symbol=${params}&resolution=D&from=${weekAgo}&to=${now}&token=c049trn48v6u76cj8eog`
    try {
        const response = await fetch(api)
        const result = await response.json()
        return result;
    } catch (error) {
        if (error) {
            return error.message
        }
    }
}
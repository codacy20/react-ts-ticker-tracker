import { InternalQuote, Quote } from './Models/Quote.model.api';


export const ApiRequests = async (params: string): Promise<Quote | undefined> => {
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
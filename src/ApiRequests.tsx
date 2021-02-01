export const ApiRequests = {

    async loadItemData(params: string) {
        return (await fetch(`https://finnhub.io/api/v1/quote?symbol=${params}&token=c049trn48v6u76cj8eog`)).json();
    }
}
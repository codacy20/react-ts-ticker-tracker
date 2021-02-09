import { InternalQuote } from "../Models/Quote.model.api";
import { Day } from "../Models/Day.model";

export function createCandleWeek(input: InternalQuote | null) {
    const week: Day[] = [];
    if (input) {
        input.time.forEach((day: number, index: number) => {
            week.push({ current: input.current[index], open: input.open[index], time: day })
        });
        week.reverse();
        return week;
    }
    return [];
}
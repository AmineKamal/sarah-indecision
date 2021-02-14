export interface DateSince
{
    ms: number;
    s: number;
    min: number;
    h: number;
    days: number;
    weeks: number;
    months: number;
    years: number;
    summary: string[];
}


export interface DateData {
    title: string;
    epoch: number;
}

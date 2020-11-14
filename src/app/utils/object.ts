
export function floor<T>(obj: T)
{
    const keys = Object.keys(obj);

    keys.forEach(key => {
        if (typeof obj[key] === "number") {
            obj[key] = Math.floor(obj[key]);
        }
    });

    return obj;
}

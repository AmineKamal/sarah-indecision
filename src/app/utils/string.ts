
export function formatNumber(n: number) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function pad(n: number, padding = 1) {
    const s = n.toString();

    if (s.length > padding) { return s; }

    const a = new Array(padding).fill(0).map(_ => "0").join("");
    return a + s;
}

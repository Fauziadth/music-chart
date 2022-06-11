export const capitalizeName = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
export const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
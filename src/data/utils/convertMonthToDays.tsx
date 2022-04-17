type ConvertMonthsToDaysParams = {
    timeLeft: number
}
export const convertMonthsToDays = ({timeLeft}: ConvertMonthsToDaysParams): number | null => {
    if (timeLeft) {
        return Math.ceil(timeLeft / (1000 * 3600 * 24));
    }
    return null
}
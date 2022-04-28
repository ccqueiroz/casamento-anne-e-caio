type GenerateRenderNumbers = {
    min: number,
    max: number
}
export const generateRenderNumbers = ({min, max}: GenerateRenderNumbers) => {
    return Math.floor(Math.random() * max + min)
}
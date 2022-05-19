export interface DataChart {
    type: string,
    value: number | undefined,
    percent?: number | undefined,
    color: string
}

export interface RenderCustomLabel {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    value: number
}
export interface RouteInterface {
    path: string
    title: string
    exact: boolean
}

export interface IPerformance {
    id: string
    type: string
    attributes: {
        title: string
        genres: string[] | null
    }
}

export interface AllTask {
    cathegory: string
    task: Task[]
}

export interface Task {
    title: string
    description: string
    co2_saving_kg: number
    points: number
}

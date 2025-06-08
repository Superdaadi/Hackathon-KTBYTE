export interface AllTask {
    cathegory: string
    task: Task[]
}

export interface Task {
    id: number
    title: string
    description: string
    co2_saving_kg: number
    points: number
}

export interface TaskID {
    id: number
    checked: boolean
}


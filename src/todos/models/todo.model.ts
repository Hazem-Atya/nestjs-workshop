
export enum TodoStatusEnum {
    TODO = "To do",
    IN_PROGRESS = "In progress",
    DONE = "Done"
}

export class Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatusEnum = TodoStatusEnum.TODO;
}
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './models/todo.model';
import { CustomException } from 'src/exceptions/custom.exception';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {

    todos: Todo[] = [
        {
            id: 0,
            title: "Finish Angular assignement",
            description: "Finish the labs related to the angular workshop",
            status: TodoStatusEnum.TODO
        },
        {
            id: 1,
            title: "Finish NestJs assignement",
            description: "Finish the labs related to the NestJS workshop",
            status: TodoStatusEnum.IN_PROGRESS
        },
        {
            id: 2,
            title: "Finish Graphql assignement",
            description: "Finish the labs related to the Graphql workshop",
            status: TodoStatusEnum.TODO
        }
    ];

    getAllTodos() {
        // throw new ForbiddenException("Access Forbidden!");
        // throw new CustomException("This is is a custom exception");
        return this.todos;
    }

    addTodo(todo: CreateTodoDto) {

        let newTodo = new Todo();
        newTodo.description = todo.description;
        newTodo.title = todo.title;
        if (this.todos.length == 0)
            newTodo.id = 0;
        else
            newTodo.id = this.todos[this.todos.length - 1].id + 1;
        this.todos.push(newTodo);
        return todo;
    }

    getTodoById(id: number) {
        const foundTodo = this.todos.find(todo => todo.id == id);
        if (!foundTodo) {
            throw new NotFoundException(`The todo with ID ${id} was not found`);
        }
        return foundTodo;
    }

    deleteTodoById(id: number) {
        const todo = new Todo()

        const foundTodo = this.todos.find(todo => todo.id == id);
        if (!foundTodo) {
            throw new NotFoundException(`The todo with ID ${id} was not found`);

        }
        this.todos = this.todos.filter(todo => todo.id != id);
    }

}

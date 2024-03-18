import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './models/todo.model';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    @Get()
    getAllTodos() {
        return this.todosService.getAllTodos();
    }

    @Post()
    addTodo(@Body() todo: CreateTodoDto) {
        return this.todosService.addTodo(todo);

    }
    @Get(':id')
    getTodoById(@Param('id', ParseIntPipe) id: number) {
        return this.todosService.getTodoById(id);
    }

    @Delete(':id')
    deleteTodoById(@Param('id') id: number) {
        return this.todosService.deleteTodoById(id);
    }


}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './models/todo.model';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { ReversePipe } from 'src/pipes/reverse.pipe';
import { ConfigService } from '@nestjs/config';

@Controller('todos')
export class TodosController {

    constructor(
        private readonly todosService: TodosService,
        private configService: ConfigService
    ) {

    }

    @Get()
    findAll(@Query('data', ReversePipe) data: string) {
        const companyName = this.configService.get<string>('COMPANY_NAME');
        console.log(companyName);
        return this.todosService.findAll();
    }



    @Post()
    create(@Body() todo: CreateTodoDto) {
        return this.todosService.create(todo);

    }
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.todosService.findById(id);
    }

    @Delete(':id')
    deleteById(@Param('id') id: number) {
        return this.todosService.deleteById(id);
    }


}

import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    ConfigModule.forRoot()
  ]
})
export class TodosModule { }

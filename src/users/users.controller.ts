import { Body, Controller, Get, Param, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { ReversePipe } from 'src/pipes/reverse.pipe';

@Controller('users')
@UseInterceptors(LoggingInterceptor)

export class UsersController {

    constructor(private readonly usersService: UsersService) { };


    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    async findAll(
        @Query('data', ReversePipe) data: string

    ): Promise<User[]> {
        console.log("Controller: Inside Users controller");
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

}

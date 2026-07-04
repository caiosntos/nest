import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {

    @Get() //GET /users
    findAll(@Query('role') role?:'INTERN'|'ADMIN'|'ENGINEER'){
        return []
    }

    @Get(':id') //GET users/:id
    findOne(@Param('id') id: string){
        return{ id }
    }

    @Post() //Post /users
    create(@Body() user: {}){
        return user
    }

    @Patch(':id') //PATCH users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return{ id, ...userUpdate }
    }

    @Delete(':id') //Delete users/:id
    delete(@Param('id') id: string){
        return{ id }
    }
}

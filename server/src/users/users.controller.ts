import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common'
import { User } from '@prisma/client'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers()
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body('userName') userName: string
    ): Promise<User> {
        return this.userService.updateUser(id, userName)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser(id)
    }
}

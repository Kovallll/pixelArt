import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { PrismaService } from '../db/db.service'
import { UsersController } from './users.controller'

@Module({
    providers: [UsersService, PrismaService],
    controllers: [UsersController],
})
export class UsersModule {}

import { Module } from '@nestjs/common'
import { SocketService } from './socket/socket.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SeedService } from './seed/seed.service'
import { UsersService } from './users/users.service'
import { PrismaService } from './db/db.service'

@Module({
    imports: [UsersModule, AuthModule],
    providers: [SocketService, UsersService, PrismaService, SeedService],
})
export class AppModule {}

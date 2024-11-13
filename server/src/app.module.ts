import { Module } from '@nestjs/common'
import { SocketService } from './socket/socket.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [UsersModule, AuthModule],
    providers: [SocketService],
})
export class AppModule {}

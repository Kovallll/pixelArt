import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from '@prisma/client'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() req: User) {
        return this.authService.login(req)
    }

    @Post('register')
    async register(@Body() req: User) {
        return this.authService.register(req.userName, req.password)
    }
}

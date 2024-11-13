import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/db/db.service'

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService
    ) {}

    async validateUser(user: User): Promise<any> {
        const currentUser = await this.prisma.user.findUnique({
            where: { userName: user.userName },
        })
        if (
            currentUser &&
            (await bcrypt.compare(user.password, currentUser.password))
        ) {
            const { password, ...result } = user
            return result
        }
        return null
    }

    async login(user: User) {
        const payload = { userName: user.userName, sub: user.id }
        if (this.validateUser(user)) {
            return {
                access_token: this.jwtService.sign(payload),
            }
        }
    }

    async register(userName: string, password: string) {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        await this.prisma.user.create({
            data: {
                userName,
                password: hashedPassword,
            },
        })
    }

    validateToken(token: string) {
        return this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET_KEY,
        })
    }
}

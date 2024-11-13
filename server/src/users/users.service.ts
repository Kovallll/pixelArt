import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/db/db.service'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        return this.prisma.user.findMany()
    }

    async findUser(userName: string) {
        const users = await this.prisma.user.findFirst({ where: { userName } })
        return users
    }

    updateUser(id: string, newUserName: string) {
        return this.prisma.user.update({
            where: { id },
            data: { userName: newUserName },
        })
    }

    deleteUser(id: string) {
        return this.prisma.user.delete({
            where: { id },
        })
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        const users = await this.prisma.user.findMany();
        // Убираем поле `password`
        return users.map(({ password, ...user }) => user);
    }
}
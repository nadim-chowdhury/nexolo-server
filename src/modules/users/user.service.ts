import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  createUser(email: string, name?: string): Promise<User> {
    const data: Prisma.UserCreateInput = {
      email,
      name,
    };
    return this.prisma.user.create({ data });
  }
}

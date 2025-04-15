import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStatus(): object {
    return { status: 'API is up and running 🚀' };
  }

  greetUser(name: string): object {
    return { message: `Hello, ${name}!` };
  }

  echoMessage(message: string): object {
    return { echoed: message };
  }

  updateRecord(id: string, name: string): object {
    return { id, updated: { name } };
  }

  deleteRecord(id: string): object {
    return { id, deleted: true };
  }
}

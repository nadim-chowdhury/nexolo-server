import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus(): object {
    return this.appService.getStatus();
  }

  @Get('greet/:name')
  greetUser(@Param('name') name: string): object {
    return this.appService.greetUser(name);
  }

  @Post('echo')
  echoMessage(@Body() body: { message: string }): object {
    return this.appService.echoMessage(body.message);
  }

  @Put('update/:id')
  updateRecord(
    @Param('id') id: string,
    @Body() body: { name: string },
  ): object {
    return this.appService.updateRecord(id, body.name);
  }

  @Delete('delete/:id')
  deleteRecord(@Param('id') id: string): object {
    return this.appService.deleteRecord(id);
  }
}

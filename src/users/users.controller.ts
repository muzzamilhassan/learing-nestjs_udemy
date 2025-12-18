import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}
  @Get()
  getUsers(@Param() params: any) {
    console.log(params);
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id: 1, name: 'John Doe' };
  }

  @Post()
  createUser(@Body() body: { name: string }) {
    console.log(body);
    return { message: 'User created successfully' };
  }
}

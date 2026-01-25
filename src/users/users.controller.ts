import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { GetUserParamsDto } from './dto/get.user.params.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // GET /users - list users with pagination
  @Get()
  @ApiOperation({ summary: 'List all users with pagination' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of users to return',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'A list of users',
  })
  getUsers(
    @Param() getUserParamsDto: GetUserParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('list users', { limit, page });
    return this.userService.findAll();
  }

  // GET /users/:id - get a single user by id
  // if you use parseIntPipe so that params will be must requried
  @Get(':id')
  getUserById(@Param() getUserParamsDto: GetUserParamsDto) {
    console.log('get user', { getUserParamsDto });
    return `ID is ${getUserParamsDto.id} and ${JSON.stringify(getUserParamsDto)}`;
  }

  // @Post('/create')
  // createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
  //   console.log(createUserDto);
  //   return 'This action adds a new user';
  // }

  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  @Patch('/updateUser')
  updateUser(@Body() updateUserDto: CreateUserDto) {
    console.log(updateUserDto);
    return 'This action updates a user';
  }
}

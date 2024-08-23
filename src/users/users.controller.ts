import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
@Controller('users')
export class UsersController {
  @Get()
  searchUsers() {
    return 'Returning user data';
  }
  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return `Returning user with id: ${userId}`;
  }
  @Post()
  createUser(@Body() user: object) {
    return user;
  }
  @Patch(':id')
  updateUser(@Param('id') @Body() updatedUser: object) {
    return { updatedUser };
  }
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return `Deleted user with id: ${userId}`;
  }
}

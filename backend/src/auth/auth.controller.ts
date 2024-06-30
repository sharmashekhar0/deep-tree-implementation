import { AuthService } from './auth.service';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signup(@Body('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return this.authService.signup(username);
  }

  @Post('/signin')
  async signin(@Body('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return this.authService.signin(username);
  }
}

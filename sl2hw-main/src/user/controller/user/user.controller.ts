import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('/1')
    async call1(): Promise<any>{
        return this.userService.Cast1();
    }
    @Get('/2')
    async call2(): Promise<any>{
        return this.userService.Cast2();
    }
    @Get('/3')
    async call3(): Promise<any>{
        return this.userService.Cast3();
    }
    @Get('/4')
    async call4(): Promise<any>{
        return this.userService.Cast4();
    }
    @Get('/5')
    async call5(): Promise<any>{
        return this.userService.Cast5();
    }
    @Get('/6')
    async call6(): Promise<any>{
        return this.userService.Cast6();
    }
    @Get('/7')
    async call7(): Promise<any>{
        return this.userService.Cast7();
    }
}

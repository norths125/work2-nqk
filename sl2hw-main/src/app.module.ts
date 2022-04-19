import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/services/user/user.service';
import { UserController } from './user/controller/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'student',
    entities: [],
    synchronize: true,
  }),
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
  
})
export class AppModule {}

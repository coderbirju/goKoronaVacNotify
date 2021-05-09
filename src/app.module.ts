import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ScheduleModule } from '@nestjs/schedule';
require('dotenv').config();
@Module({
  imports: [ScheduleModule.forRoot(), MongooseModule.forRoot(process.env.MONGDB_URI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

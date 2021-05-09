import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
        ) {}
    private readonly logger = new Logger(UsersService.name);
    
    async create(createCatDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createCatDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    @Cron(CronExpression.EVERY_MINUTE)
    checkVacAvailabilty() {
    this.logger.debug('Called Every minute');
    }
}

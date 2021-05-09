import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  mobile: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  picode: string;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
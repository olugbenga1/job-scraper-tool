import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  job_location: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  source: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  description: string;

  @Prop()
  salary: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  postDate: Date;

  @Prop({ default: Date.now() })
  scrapedAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);
JobSchema.index({ url: 1, source: 1 }, { unique: true });

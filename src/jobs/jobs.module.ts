import { Module } from '@nestjs/common';
import { JobController } from './jobs.controller';
import { JobService } from './jobs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}

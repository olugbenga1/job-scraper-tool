import { Controller } from '@nestjs/common';
import { JobService } from './jobs.service';
// import { Job } from './schemas/job.schema';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}
}

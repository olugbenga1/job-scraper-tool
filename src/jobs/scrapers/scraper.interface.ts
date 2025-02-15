import { CreateJobDto } from '../dto/create-job.dto';

export interface JobScrapper {
  name: string;
  scrape(query: string, location: string): Promise<CreateJobDto[]>;
}

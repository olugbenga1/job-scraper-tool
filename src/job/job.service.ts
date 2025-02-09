import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './schemas/job.schema';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  private jobBoards = [
    { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=nestjs&l=remote' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/jobs/search?keywords=NestJS',
    },
    { name: 'Monster', url: 'https://www.monster.com/jobs/search/?q=NestJS' },
    {
      name: 'Glassdoor',
      url: 'https://www.glassdoor.com/Job/nestjs-jobs-SRCH_KO0,6.htm',
    },
    { name: 'SimplyHired', url: 'https://www.simplyhired.com/search?q=nestjs' },
    {
      name: 'WeWorkRemotely',
      url: 'https://weworkremotely.com/remote-backend-jobs',
    },
    { name: 'Remotive', url: 'https://remotive.io/remote-jobs/software-dev' },
    { name: 'HackerNews Jobs', url: 'https://news.ycombinator.com/jobs' },
    { name: 'AngelList', url: 'https://angel.co/jobs' },
  ];

  async scrapeNestJsJobs(): Promise<Job[]> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    let allJobs: Job[] = [];

    for (const board of this.jobBoards) {
      await page.goto(board.url, { waitUntil: 'domcontentloaded' });
      const jobs = await page.evaluate((source) => {
        return Array.from(
          document.querySelectorAll('.job_seen_beacon, .result-card'),
        ).map((job) => ({
          title: job.querySelector('h2 a')?.textContent?.trim() || 'N/A',
          company:
            job
              .querySelector('.companyName, .result-card__subtitle')
              ?.textContent?.trim() || 'N/A',
          job_location:
            job
              .querySelector('.companyLocation, .job-result-card__location')
              ?.textContent?.trim() || 'N/A',
          link: job.querySelector('h2 a')?.getAttribute('href') || 'N/A',
          source,
        }));
      }, board.name);
      for (const job of jobs) {
        await new this.jobModel(job).save();
      }

      allJobs = [...allJobs, ...(jobs as Job[])];
    }
    await browser.close();
    return allJobs;
  }
}

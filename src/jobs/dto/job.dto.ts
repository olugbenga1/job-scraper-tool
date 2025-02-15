export class JobDto {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly description: string;
  readonly salary: string;
  readonly url: string;
  readonly source: string;
  readonly postDate: Date;
  readonly scrapedAt: Date;
}

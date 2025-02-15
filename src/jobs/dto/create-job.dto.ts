export class CreateJobDto {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly description: string;
  readonly salary: string;
  readonly url: string;
  readonly source: string;
  readonly postDate?: Date;
}

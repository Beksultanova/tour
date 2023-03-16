export class Post {
  public id!: number;
  public title!: string;
  public body!: string;

  constructor(init?: Partial<Post>) {
    this.id = Math.round(Math.random() * 1000);
    Object.assign(this, init);
  }
}

export class ToDo {
  public id!: number;
  public caption!: string;
  public isDone!: boolean;

  constructor(init?: Partial<ToDo>) {
    this.id = Math.round(Math.random() * 1000000);
    Object.assign(this, init);
  }
}


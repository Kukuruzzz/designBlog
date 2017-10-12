export class Contact {
  constructor (
    public id: string,
    public firstName: string,
    public lastName: string,
    public company: string,
    public email: string,
    public phoneNumber: number,
    public comments: string,
    public date: string
  ) {}
}

class User {
  id: number;
  nickName: string;
  name: string;
  mail: string;
  operator: boolean;

  constructor(
    id: number,
    nickName: string,
    name: string,
    mail: string,
    operator: boolean
  ) {
    this.id = id;
    this.nickName = nickName;
    this.name = name;
    this.mail = mail;
    this.operator = operator;
  }
}

export { User };

import { User } from "../data/User";
import { DEFAULT_URL } from "../data/Constant";
import _ from "lodash";

const DELAY_TIME = 200;
const users: User[] = [];

function add({
  nickName,
  name,
  mail,
}: {
  nickName: string;
  name: string;
  mail: string;
}): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newUser = new User(users.length + 1, nickName, name, mail, true);
      users.push(newUser);
      resolve();
    }, DELAY_TIME);
  });
}

function remove(user: User): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      _.remove(users, (item) => {
        return user.id === item.id;
      });
      resolve();
    }, DELAY_TIME);
  });
}

function getAll(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, DELAY_TIME);
  });
}

function get(name: string): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = users.find((item) => {
        return item.name === name;
      });
      resolve(result);
    }, DELAY_TIME);
  });
}

function update(user: User): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex((item) => {
        return item.id === user.id;
      });
      users[index] = user;
      resolve();
    }, DELAY_TIME);
  });
}

export default {
  add,
  remove,
  getAll,
  get,
  update,
};

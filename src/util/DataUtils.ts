import { User } from "../data/User";
import _ from "lodash";
import NetUtils from "./NetUtils";

async function get(name: string) {
  return await NetUtils.get(name);
}

async function getAll(): Promise<User[]> {
  return await NetUtils.getAll();
}

async function add(data: { nickName: string; name: string; mail: string }) {
  await NetUtils.add(data);
}

async function update(user: User) {
  await NetUtils.update(user);
}

async function remove(user: User) {
  await NetUtils.remove(user);
}

const MAIL_REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function isMail(mail: string) {
  return MAIL_REG.test(mail);
}

const checkParam = (nickName: string, name: string, mail: string) => {
  let tip = "";
  switch (true) {
    case _.isEmpty(nickName):
      tip = "昵称必填";
      break;
    case _.isEmpty(name):
      tip = "名称必填";
      break;
    case !_.isEmpty(mail) && !isMail(mail):
      tip = "邮箱不符合规范";
      break;
  }
  return tip;
};

export default { get, getAll, update, add, isMail, remove, checkParam };

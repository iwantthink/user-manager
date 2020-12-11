import React, { useState } from "react";
import { User } from "../data/User";
import {
  useHistory,
  useLocation
} from "react-router-dom";
import DataUtils from "../util/DataUtils";

export function UserEdit() {
  const location = useLocation();
  let defaultUser: User | undefined;
  if (location.state) {
    defaultUser = location.state as User;
  }
  const history = useHistory();
  const [nickName, setNickName] = useState(
    defaultUser ? defaultUser.nickName : ""
  );
  const [name, setName] = useState(defaultUser ? defaultUser.name : "");
  const [mail, setMail] = useState(defaultUser ? defaultUser.mail : "");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tip = DataUtils.checkParam(nickName, name, mail);
    if (tip) {
      alert(tip);
      return;
    }
    (async () => {
      if (defaultUser) {
        defaultUser = { ...defaultUser, nickName, name, mail };
        await DataUtils.update(defaultUser);
      } else {
        await DataUtils.add({ nickName, name, mail });
      }
      history.push("/");
    })();
  };
  const handleCancel = () => {
    history.push("/");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "mail":
        setMail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "nickName":
        setNickName(e.target.value);
        break;
    }
  };

  return (
    <form className="form">
      <label className="label nick-name">
        <span className="text">用户名</span>
        <span className="icon">*</span>
        <input
          type="text"
          name="nickName"
          value={nickName}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <label className="label name">
        <span className="text">姓名</span>
        <span className="icon">*</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <label className="label mail">
        <span className="text">邮箱</span>
        <span className="icon icon-hide">*</span>
        <input
          type="mail"
          name="mail"
          value={mail}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <div className="action">
        <button className="add" type="button" onClick={handleSubmit}>
          {defaultUser ? "更新" : "添加"}
        </button>
        <button className="cancel" type="button" onClick={handleCancel}>
          取消
        </button>
      </div>
    </form>
  );
}

import React from "react";
import { User } from "../data/User";
import { Operator } from "./Operator";


export function UserRow(props: { user?: User; callback: (user: User) => void; }) {
  return (
    <tr>
      <td>{props.user ? props.user.nickName : "用户名"}</td>
      <td>{props.user ? props.user.name : "姓名"}</td>
      <td>{props.user ? props.user.mail : "邮箱"}</td>
      <td>
        {props.user ? (
          <Operator user={props.user} callback={props.callback}></Operator>
        ) : (
            "操作"
          )}
      </td>
    </tr>
  );
}

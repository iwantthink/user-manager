import React, { useEffect, useState } from "react";
import { User } from "../data/User";
import { Link } from "react-router-dom";
import DataUtils from "../util/DataUtils";
import { UserRow } from "./UserRow";
import { useUsers } from "../hook/useUsers";

export function UserList() {
  // const [list, updateList] = useState([] as Array<User>);
  const [list, updateList] = useUsers();

  const handleDelete = async (user: User) => {
    await DataUtils.remove(user);
    updateList([...(await DataUtils.getAll())]);
  };
  const users = list.map((item) => {
    return (
      <UserRow user={item} key={item.id} callback={handleDelete}></UserRow>
    );
  });
  const initData = async () => {
    // 异步获取
    const result = await DataUtils.getAll();
    updateList(result);
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="container">
      <Link className="link" to="/userEdit">
        添加用户
      </Link>
      <table className="table">
        <thead className="thead">
          <UserRow callback={() => {}}></UserRow>
        </thead>
        <tbody className="tbody" key={users.length}>
          {users}
        </tbody>
      </table>
    </div>
  );
}

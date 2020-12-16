import React, { useEffect } from "react";
import { User } from "../data/User";
import { Link } from "react-router-dom";
import DataUtils from "../util/DataUtils";
import { UserRow } from "./UserRow";
import { useUsers } from "../hook/useUsers";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, add, remove, update } from "../redux/usersSlice";

export function UserList() {
  const list = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleDelete = async (user: User) => {
    dispatch(remove(user));
  };
  const users = list.map((item) => {
    return (
      <UserRow user={item} key={item.id} callback={handleDelete}></UserRow>
    );
  });
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

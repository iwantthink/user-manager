import React from "react";
import { User } from "../data/User";
import { useHistory } from "react-router-dom";

export function Operator(props: {
  user: User;
  callback: (user: User) => void;
}) {
  const history = useHistory();
  const handleDelete = () => {
    props.callback(props.user);
  };
  const handleEdit = () => {
    history.push({
      pathname: "/userEdit",
      state: props.user,
    });
  };
  return (
    <div className="action-container">
      <button className="edit iconfont" onClick={handleEdit}>
        &#xe61c; 编辑
      </button>
      <button className="delete iconfont" onClick={handleDelete}>
        &#xe614; 删除
      </button>
    </div>
  );
}

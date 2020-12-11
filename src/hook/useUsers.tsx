import { useState } from "react";
import { User } from "../data/User";
import { users as data } from "../util/NetUtils";

export function useUsers(): [
  User[],
  React.Dispatch<React.SetStateAction<User[]>>
] {
  const [list, updateList] = useState(data);
  return [list, updateList];
}

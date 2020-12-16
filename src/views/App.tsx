import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/usersSlice";
import "../style/app.less";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import _ from "lodash";
import { UserList } from "./UserList";
import { UserEdit } from "./UserEdit";

function App() {
  const list2 = useSelector(selectUsers);
  console.log("list2", list2);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/userEdit">
          <UserEdit></UserEdit>
        </Route>
        <Route path="/">
          <UserList></UserList>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

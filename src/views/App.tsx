import React from "react";
import "../style/app.less";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import _ from "lodash";
import { UserList } from "./UserList";
import { UserEdit } from "./UserEdit";

function App() {
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

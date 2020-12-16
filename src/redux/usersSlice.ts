import { createSlice } from "@reduxjs/toolkit";
import { User } from "../data/User";
import _ from "lodash";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [] as User[],
  },
  reducers: {
    add: (state, action) => {
      console.log("add", state, action);
      const target = action.payload as User;
      state.value.push(
        new User(
          state.value.length + 1,
          target.nickName,
          target.name,
          target.mail,
          true
        )
      );
      //   state.value.push(action.payload);
    },
    remove: (state, action) => {
      console.log("remove", state, action);
      _.remove(state.value, (item) => {
        return item.id === action.payload.id;
      });
    },
    update: (state, action) => {
      console.log("update", state, action);
      const target = action.payload as User;
      const index = state.value.findIndex((item) => {
        return item.id === target.id;
      });
      state.value[index] = target;
    },
  },
});

export const { add, remove, update } = usersSlice.actions;

export const selectUsers = (state: { users: { value: User[] } }) => {
  return state.users.value;
};

export default usersSlice.reducer;

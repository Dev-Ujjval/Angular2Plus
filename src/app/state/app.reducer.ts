import { createReducer, on } from "@ngrx/store";
import {
  addUserSuccess,
  deleteUserSuccess,
  getUsersSuccess,
  updateUserSuccess,
} from "./app.action";
import { initialState } from "./app.state";

const _userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => {
    return {
      ...state,
      userDetials: action.users,
    };
  }),

  on(addUserSuccess, (state, action) => {
    return {
      ...state,
      userDetials: [...state.userDetials, action.user],
    };
  }),

  on(updateUserSuccess, (state, action) => {
    const allUsres = [...state.userDetials];
    const index = allUsres.findIndex((el) => el.Id === action.user.Id);
    allUsres[index] = {...action.user};
    return {
      ...state,
      userDetials: allUsres,
    };
  }),
  
  on(deleteUserSuccess, (state, action) => {
    const allUsres = [...state.userDetials];
    const index = allUsres.findIndex((el) => el.Id === action.id);
    allUsres.splice(index, 1);
    return {
      ...state,
      userDetials: allUsres,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

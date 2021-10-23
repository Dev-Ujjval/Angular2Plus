import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState, USER_STATE_NAME } from "./app.state";

const getUserState = createFeatureSelector<userState>(USER_STATE_NAME);


export const getAllUsres = createSelector(getUserState, (state) => {
    return state.userDetials;
})
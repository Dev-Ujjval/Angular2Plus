import { createAction, props } from "@ngrx/store";
import { IPeriodicElement } from "../app.model";

export enum userActions {
    GET_USER = '[user] get user',
    GET_USER_SUCCESS = '[user] get user success',
    GET_USER_FAILURE = '[user] get user failure',

    ADD_USER = '[user] add user',
    ADD_USER_SUCCESS = '[user] add user success',
    ADD_USER_FAILURE = '[user] add user failure',

    UPDATE_USER = '[user] update user',
    UPDATE_USER_SUCCESS = '[user] update user success',
    UPDATE_USER_FAILURE = '[user] update user failure',

    DELETE_USER = '[user] delete user',
    DELETE_USER_SUCCESS = '[user] delete user success',
    DELETE_USER_FAILURE = '[user] delete user failure',

    SHOW_MESSAGE = '[user] show message'
}

export const getUsers = createAction(userActions.GET_USER);
export const getUsersSuccess = createAction(userActions.GET_USER_SUCCESS, props<{users: IPeriodicElement[]}>())
export const getUsersFailure = createAction(userActions.GET_USER_FAILURE, props<{error: any}>())

export const addUser = createAction(userActions.ADD_USER,props<{user: IPeriodicElement}>());
export const addUserSuccess = createAction(userActions.ADD_USER_SUCCESS, props<{user: IPeriodicElement}>())
export const addUserFailure = createAction(userActions.ADD_USER_FAILURE, props<{error: any}>())

export const updateUser = createAction(userActions.UPDATE_USER, props<{user: IPeriodicElement}>());
export const updateUserSuccess = createAction(userActions.UPDATE_USER_SUCCESS, props<{user: IPeriodicElement}>())
export const updateUserFailure = createAction(userActions.UPDATE_USER_FAILURE, props<{error: any}>())

export const deleteUser = createAction(userActions.DELETE_USER, props<{id: string}>());
export const deleteUserSuccess = createAction(userActions.DELETE_USER_SUCCESS, props<{id: string}>())
export const deleteUserFailure = createAction(userActions.DELETE_USER_FAILURE, props<{error: any}>())

export const showMessage = createAction(userActions.SHOW_MESSAGE, props<{message: string, messageType: string}>())
    
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "../app.service";
import {
  addUser,
  addUserFailure,
  addUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  showMessage,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
} from "./app.action";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { initialState } from "../state/app.state";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";

@Injectable()
export class UserEffects {
  constructor(
    private userService: AppService,
    private actions$: Actions,
    private _snackBar: MatSnackBar,
    private store: Store<any>
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsers),
      exhaustMap(() => {
        return this.userService.onGet().pipe(
          map((res) => {
            return getUsersSuccess({ users: res });
          }),
          catchError((error) => {
            return of(getUsersFailure({ error }));
          })
        );
      })
    );
  });

  addUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUser),
      exhaustMap((actions) => {
        return this.userService.onPost(actions.user).pipe(
          map((res) => {
            this.store.dispatch(
              showMessage({ message: "User Added", messageType: "Success" })
            );
            return addUserSuccess({ user: res });
          }),
          catchError((error) => {
            this.store.dispatch(
              showMessage({
                message: "Something went wrong",
                messageType: "Danger",
              })
            );
            return of(addUserFailure({ error }));
          })
        );
      })
    );
  });

  updateUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      exhaustMap((actions) => {
        return this.userService.onPut(actions.user).pipe(
          map((res) => {
            this.store.dispatch(
              showMessage({ message: "User Updated", messageType: "Success" })
            );
            return updateUserSuccess({ user: res });
          }),
          catchError((error) => {
            this.store.dispatch(
              showMessage({
                message: "Something went wrong",
                messageType: "Danger",
              })
            );
            return of(updateUserFailure({ error }));
          })
        );
      })
    );
  });

  deleteUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      exhaustMap((actions) => {
        return this.userService.onDelete(actions.id)
          .pipe(
            map((res) => {
              this.store.dispatch(
                showMessage({ message: "User Deleted", messageType: "Success" })
              );
              return deleteUserSuccess({ id: res });
            }),
            catchError((error) => {
              this.store.dispatch(
                showMessage({
                  message: "Something went wrong",
                  messageType: "Danger",
                })
              );
              return of(deleteUserFailure({ error }));
            })
          );
      })
    );
  });

  showMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(showMessage),
        map((action) => {
          this._snackBar.open(action.message, action.messageType, {
            duration: 3000,
          });
        })
      );
    },
    { dispatch: false }
  );
}

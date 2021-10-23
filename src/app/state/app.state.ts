import { IPeriodicElement } from "../app.model";

export const USER_STATE_NAME = "userState";
export interface userState {
  userDetials: IPeriodicElement[];
}
export const initialState: userState = {
  userDetials: [
    {
      Id: "1",
      Name: "user 1",
      Designation: "manager",
      About: "test about",
    },
    {
      Id: "2",
      Name: "user 2",
      Designation: "developer",
      About: "test about 1",
    },
    {
      Id: "3",
      Name: "user 3",
      Designation: "tester",
      About: "test about 3",
    },
  ],
};

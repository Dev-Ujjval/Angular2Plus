import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { IPeriodicElement } from "./app.model";
import { initialState } from "./state/app.state";
@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor() {}

  onGet() {
    return of(initialState.userDetials);
  }

  onPost(data: IPeriodicElement) {
    return of(data);
  }

  onPut(data: IPeriodicElement) {
    return of(data);
  }

  onDelete(id: string) {
    return of(id);
  }
 
}

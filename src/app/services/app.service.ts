import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IPeriodicElement } from "../models/app.model";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private subject = new Subject<any>();

  setData(data: IPeriodicElement[]): void {
    this.subject.next(data);
  }

  getData(): Observable<IPeriodicElement[]> {
    return this.subject.asObservable();
  }

  constructor() {}

  onGet(initData: IPeriodicElement[]) {
    this.setData(initData);
  }

  onPost(initData: IPeriodicElement[], data: IPeriodicElement) {
    const payload:IPeriodicElement[] = Object.assign([], initData);
    payload.push({
      Id: uuidv4(),
      Name: data.Name,
      Designation: data.Designation,
      About: data.About,
    });
    this.setData(payload);
  }

  onPut(initData: IPeriodicElement[], data: IPeriodicElement) {
    const payload: IPeriodicElement[] = Object.assign([], initData);
    payload.map((x) => {
      if (x.Id == data.Id) {
        (x.Id = data.Id),
          (x.Name = data.Name),
          (x.Designation = data.Designation),
          (x.About = data.About);
      }
    });
    this.setData(payload);
  }

  onDelete(initData: IPeriodicElement[], id: string) {
    const payload: IPeriodicElement[] = Object.assign([], initData);
    const res = payload.filter((x) => x.Id !== id);
    this.setData(res);
  }
}

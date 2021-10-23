import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IPeriodicElement } from "./app.model";
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

  onPost(initData: IPeriodicElement[], data: IPeriodicElement) {
    initData.push({
      Id: uuidv4(),
      Name: data.Name,
      Designation: data.Designation,
      About: data.About,
    });
    this.setData(initData);
  }

  onPut(initData: IPeriodicElement[], data: IPeriodicElement) {
    initData.map((x) => {
      if (x.Id == data.Id) {
        (x.Id = data.Id),
          (x.Name = data.Name),
          (x.Designation = data.Designation),
          (x.About = data.About);
      }
    });
    this.setData(initData);
  }

  onDelete(initData: IPeriodicElement[], id: string) {
    const res = initData.filter((x) => x.Id !== id);
    this.setData(res);
  }
}

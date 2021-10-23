import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { IAppComponent, IPeriodicElement } from "./app.model";
import { initDetail } from "./data";
import { Store } from "@ngrx/store";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "./state/app.action";
import { getAllUsres } from "./state/app.selector";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, IAppComponent, OnInit {
  action: string = "Submit";

  displayedColumns: string[] = ["Name", "Designation", "About", "Action"];
  dataSource = new MatTableDataSource<IPeriodicElement>();

  detail: IPeriodicElement;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  subscription: Subscription;

  constructor(
    private _snackBar: MatSnackBar,
    private store: Store<any>,
    private cdr: ChangeDetectorRef
  ) {
    this.detail = Object.assign({}, initDetail);
    this.subscription = this.store.select(getAllUsres).subscribe((user) => {
      this.dataSource.data = user;
    });
  }

  ngOnInit() {
    this.store.dispatch(getUsers());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAction() {
    if (this.detail.Name && this.detail.Designation && this.detail.About) {
      if (this.action == "Submit") {
        const data = { ...this.detail };
        data.Id = uuidv4();
        this.store.dispatch(addUser({ user: data }));
        this.clear();
      } else {
        this.store.dispatch(updateUser({ user: this.detail}));
        this.clear();
      }
    } else {
      this._snackBar.open("please fill all required fields", "Error", {
        duration: 3000,
      });
    }
    this.action = "Submit";
  }

  edit(data: IPeriodicElement) {
    this.action = "Update";
    this.detail = Object.assign({}, data);
  }

  delete(data: IPeriodicElement) {
    this.store.dispatch(deleteUser({ id: data.Id }));
  }

  clear() {
    this.detail = Object.assign({}, initDetail);
    this.cdr.detectChanges();
  }
}

import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { IAppComponent, IPeriodicElement } from "./app.model";
import { initData, initDetail } from "./data";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, IAppComponent {
  action: string = "Submit";

  displayedColumns: string[] = ["Name", "Designation", "About", "Action"];
  dataSource = new MatTableDataSource<IPeriodicElement>();

  detail: IPeriodicElement;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  subscription: Subscription;

  constructor(private appService: AppService, private _snackBar: MatSnackBar) {
    this.detail = Object.assign({}, initDetail);
    this.dataSource.data = Object.assign([], initData);

    this.subscription = this.appService.getData().subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAction() {
    if (this.detail.Name && this.detail.Designation && this.detail.About) {
      if (this.action == "Submit") {
        this.appService.onPost(this.dataSource.data, this.detail);
        this.detail = Object.assign({}, initDetail);
        this._snackBar.open("Data Posted", "Success", {
          duration: 3000,
        });
      } else {
        this.appService.onPut(this.dataSource.data, this.detail);
        this.detail = Object.assign({}, initDetail);
        this._snackBar.open("Data Updated", "Success", {
          duration: 3000,
        });
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
    this.appService.onDelete(this.dataSource.data, data.Id);
    this._snackBar.open("Data Removed", "Success", {
      duration: 3000,
    });
  }

}

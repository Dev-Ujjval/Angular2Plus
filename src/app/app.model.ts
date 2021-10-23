export interface IAppComponent {
  onAction(): void;
  edit(data: IPeriodicElement): void;
  delete(data: IPeriodicElement): void;
}


export interface IPeriodicElement {
  Id: string;
  Name: string;
  Designation: string;
  About: string;
}

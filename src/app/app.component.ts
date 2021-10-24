import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Select2Demo';

  cities = [
    {id: 1, name: 'Ujjval' , city: 'Surat'},
    {id: 2, name: 'Mahesh' , city: 'Baroda'},
    {id: 3, name: 'Dhaval' , city: 'Pune'},
    {id: 4, name: 'Prashant' , city: 'Mumbai'},
    {id: 5, name: 'Manthan' , city: 'Goa'}
].map((i) => { i.name = i.name + ' ' + i.city; return i; });


selectedCity: any = {id: 1, name: 'Ujjval' , city: 'Surat'};
selectedCityIds: string[];
selectedCityName = 'Vilnius';
selectedCityId: number;
selectedUserIds: number[];

}



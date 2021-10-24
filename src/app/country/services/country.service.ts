import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';

const COUNTRIES = [
new Country(1, 'India', 'New Delhi', 'INR'),
new Country(2, 'China', 'Beijing', 'RMB')
];
// tslint:disable-next-line: prefer-const
let countriesObservable = of(COUNTRIES);

@Injectable()
export class CountryService {
	getCountries(): Observable<Country[]> {
		return countriesObservable;
	}
	getCountry(id: number): Observable<Country> {
		return this.getCountries().pipe(map(countries => countries.find(country => country.countryId === id)));
	}
	updateCountry(country: Country): Observable<Country> {
		return this.getCountries().pipe(map(countries => {
			let countryObj = countries.find(ob => ob.countryId === country.countryId);
			countryObj = country;
			return countryObj;
		}));
	}
	addCountry(country: Country): Observable<Country> {
		return this.getCountries().pipe(map(countries => {
			let maxIndex = countries.length - 1;
			let countryWithMaxIndex = countries[maxIndex];
			country.countryId = countryWithMaxIndex.countryId + 1;
			countries.push(country);
			return country;
		}));
	}
}
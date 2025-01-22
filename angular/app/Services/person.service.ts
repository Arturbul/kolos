import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Person } from "../../Model/Person";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class PersonService {
	private _persons: BehaviorSubject<Person[]>;
	persons: Observable<Person[]>;
	private _data: Person[] = [];
	constructor(private client: HttpClient) {
		this._persons = new BehaviorSubject(this._data);
		this.persons = this._persons.asObservable();
	}

	load() {
		this.client.get<Person[]>("http://localhost:5186/api/Persons").subscribe({
			next: (res) => {
				this._persons.next(res);
			},
		});
	}

	get(id: number): Observable<Person> {
		return this.client.get<Person>(
			"http://localhost:5186/api/Persons" + `/${id}`
		);
	}

	create(person: Person): void {
		this.client
			.post<Person>("http://localhost:5186/api/Persons", person)
			.subscribe({ next: () => this.load() });
	}
}

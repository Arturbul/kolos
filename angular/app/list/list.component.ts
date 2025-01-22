import { Component, EventEmitter, OnInit, Output, output } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../../Model/Person";
import { PersonService } from "../Services/person.service";

@Component({
	selector: "app-list",
	standalone: false,

	templateUrl: "./list.component.html",
	styleUrl: "./list.component.css",
})
export class ListComponent implements OnInit {
	persons: Observable<Person[]>;
	@Output() details: EventEmitter<number | undefined>;
	constructor(private personService: PersonService) {
		this.persons = personService.persons;
		this.details = new EventEmitter<number | undefined>();
	}
	ngOnInit(): void {
		this.personService.load();
	}
	handleDetails(id: number) {
		this.details.emit(id);
	}
}

import { Component, EventEmitter, Output } from "@angular/core";
import { Person } from "../../Model/Person";
import { PersonService } from "../Services/person.service";

@Component({
	selector: "app-create",
	standalone: false,

	templateUrl: "./create.component.html",
	styleUrl: "./create.component.css",
})
export class CreateComponent {
	@Output() close: EventEmitter<Person> = new EventEmitter();
	person: Person = {
		id: 0,
		name: "",
		age: 0,
		normal: true,
	};
	constructor(private personService: PersonService) {}
	submit() {
		this.personService.create(this.person);
	}
	hide() {
		this.close.emit(undefined);
	}
}

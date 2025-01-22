import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PersonService } from "../Services/person.service";
import { Observable } from "rxjs";
import { Person } from "../../Model/Person";

@Component({
	selector: "app-detauls",
	standalone: false,

	templateUrl: "./detauls.component.html",
	styleUrl: "./detauls.component.css",
})
export class DetaulsComponent implements OnInit {
	person: Person | undefined;
	@Input() entityId: number | undefined;
	@Output() close: EventEmitter<Person> = new EventEmitter();

	constructor(private personService: PersonService) {}

	ngOnInit() {
		this.personService
			.get(this.entityId!)
			.subscribe({ next: (res) => (this.person = res) });
	}

	hide() {
		this.close.emit(undefined);
	}
}

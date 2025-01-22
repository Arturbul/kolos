import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
		<button (click)="showForm()">Add new</button>
		<app-create *ngIf="isForm" (close)="close()"></app-create>
		<app-list (details)="details($event!)"></app-list>
		<app-detauls
			(close)="close()"
			*ngIf="entityId !== undefined && !isCLosed"
			[entityId]="entityId"
		></app-detauls>
	`,
	standalone: false,
	styles: [],
})
export class AppComponent {
	entityId: number | undefined;
	isCLosed: boolean = true;
	isForm: boolean = false;
	details(entityId: number): void {
		this.isCLosed = false;
		this.entityId = entityId;
	}
	close() {
		this.isCLosed = true;
		this.isForm = false;
		this.entityId = undefined;
	}
	showForm() {
		this.isForm = true;
		this.isCLosed = false;
	}
}

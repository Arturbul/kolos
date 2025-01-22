import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { PersonService } from "./Services/person.service";
import { HttpClientModule } from "@angular/common/http";
import { CreateComponent } from './create/create.component';
import { DetaulsComponent } from './detauls/detauls.component';

@NgModule({
	declarations: [AppComponent, ListComponent, CreateComponent, DetaulsComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [PersonService],
	bootstrap: [AppComponent],
})
export class AppModule {}

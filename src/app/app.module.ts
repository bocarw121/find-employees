import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { HiredComponent } from './hired/hired.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserCardComponent } from './user-card/user-card.component';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		HomeComponent,
		EmployeesComponent,
		EmployeeComponent,
		HiredComponent,
		UserCardComponent,
		HireEmployeeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		NavLinkComponent,
		FontAwesomeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

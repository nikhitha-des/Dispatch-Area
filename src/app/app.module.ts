import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDispatchAreaComponent } from './create-dispatch-area/create-dispatch-area.component';
import { ButtonModule, DrpdownModule, TextBoxModule } from 'lntds-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { AddDivisionComponent } from './add-division/add-division.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateDispatchAreaComponent,
    AddDivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextBoxModule,
    ButtonModule,
    BrowserAnimationsModule,
    AgGridAngular,
    FormsModule,
    ReactiveFormsModule,
    DrpdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

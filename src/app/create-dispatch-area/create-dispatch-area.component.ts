import { Component, OnInit } from '@angular/core';
import { TextBoxModule } from 'lntds-lib';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ButtonShape, ButtonStyle, ButtonSize, ButtonColor } from 'lntds-lib';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import {IdropDownItem } from 'lntds-lib';

interface IRow {
  AreaName: string;
  ID: any;
  DivisionName: string;
  Priority: string;
  Location: any;
  Address: string;
  City: string;
  State : string;
  Country : string;
  Pincode : number;
  Action : string;
}

@Component({
  selector: 'app-create-dispatch-area',
  templateUrl: './create-dispatch-area.component.html',
  styleUrls: ['./create-dispatch-area.component.css']
})
export class CreateDispatchAreaComponent implements OnInit {
cancel() {
throw new Error('Method not implemented.');
}
save() {
throw new Error('Method not implemented.');
}
addDivision() {
throw new Error('Method not implemented.');
}
countries: any;
states: any;
onCountryChange() {
throw new Error('Method not implemented.');
}

public ButtonColor = ButtonColor;

public ButtonSize = ButtonSize;

public ButtonStyle = ButtonStyle;

public ButtonShape = ButtonShape;


public priority: IdropDownItem[] = [
  { DisplayValue: 'High', Value: 1 },
  { DisplayValue: 'Medium', Value: 2  },
  { DisplayValue: 'Low', Value: 3  }
];

public country: IdropDownItem[] = [
  { DisplayValue: 'India', Value: 1 },
  { DisplayValue: 'Saudi Arabia', Value: 2  },
  { DisplayValue: 'USA', Value: 3  }
];

public state: IdropDownItem[] = [
  { DisplayValue: 'Andhra Pradesh', Value: 1 },
  { DisplayValue: 'Madhya Pradesh', Value: 2  },
  { DisplayValue: 'Tamil Nadu', Value: 3  }
];

rowData: IRow[] = [
  { AreaName: "Area1", ID: "#6466", DivisionName: "Division1,Division2", Priority: "High", Location: "Old Palasia",Address :"534, Street 5, west", City: "Indore", State : "Madhya Pradesh", Country: "India", Pincode: 452001, Action:""},
  { AreaName: "Area1", ID: "#6467", DivisionName: "Division1", Priority: "High", Location: "Old Palasia",Address :"534, Street 5, west", City: "Indore", State : "Madhya Pradesh", Country: "India", Pincode: 452001, Action:""},
  { AreaName: "Area1", ID: "#6468", DivisionName: "Division1", Priority: "High", Location: "Old Palasia",Address :"534, Street 5, west", City: "Indore", State : "Madhya Pradesh", Country: "India", Pincode: 452001, Action:""},
  
 
];
colDefs: ColDef[] = [
  { field: "AreaName" },
  { field: "ID" },
  { field: "DivisionName" },
  { field: "Priority" },
  {field : "Location"},
  {field : "Address"},
  {field : "City"},
  {field : "State"},
  {field : "Country"},
  {field : "Pincode"},
  {field : "Action"}
];

   createDispatch : FormGroup

  constructor(private formBuilder : FormBuilder) { }
  //createDispatch : FormGroup

  ngOnInit(): void {
    this.createDispatch = this.formBuilder.group(
      {
        areaName : [''],
        locationId : [''],
        addressLine1 : [''],
        priority : [''],
        addressLine2 : [''],
        mlGeoJSONFile : [''],
        browseFile : [''],
        pincode : [''],
        latitude : [''],
        city : [''],
        longitude : [''],
        state : [''],
        country : [''],
      }
    );
  }

}

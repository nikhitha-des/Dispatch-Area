import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonShape, ButtonStyle, ButtonSize, ButtonColor } from 'lntds-lib';
import {IdropDownItem } from 'lntds-lib';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.css']
})
export class AddDivisionComponent implements OnInit {
dispatchAreas: any;
save() {
throw new Error('Method not implemented.');
}
cancel() {
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

public dispatchAreaName: IdropDownItem[] = [
  { DisplayValue: 'Area1', Value: 1 },
  { DisplayValue: 'Area2', Value: 2  },
  { DisplayValue: 'Area3', Value: 3  }
];

addDivision : FormGroup
constructor(private formBuilder : FormBuilder) { }
  //createDispatch : FormGroup

  ngOnInit(): void {
    this.addDivision = this.formBuilder.group(
      {
        dispatchAreaName : [''],
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

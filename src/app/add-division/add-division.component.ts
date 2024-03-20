import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}

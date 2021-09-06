import { Component, OnInit,Input, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventEmitter } from '@angular/core'; 
import { FormControl, FormGroup} from '@angular/forms'; 
import { SharedService } from 'src/app/shared.service'; 
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 
  @Input() public name : string; 
  @Input() public dob : string; 
  @Input() public email: string; 
  @Input() public eid : number; 

  public confirmForm :FormGroup;
  

  constructor( private ss:SharedService) 
  {

  } 

  ngOnInit(): void {
    this.confirmForm = new FormGroup({ name : new FormControl(this.name), 
      dob: new FormControl(this.dob),
      email: new FormControl(this.email),
      eid: new FormControl(this.eid)
      }) 
  }
  onConfirm(){ 
    this.ss.confirmEmployeeDetails(this.confirmForm.value);
     
    } 

}

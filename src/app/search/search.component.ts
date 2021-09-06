import { Employee } from '../employee.model'; 
import { SharedService } from '../shared.service'; 
import { NgModule } from '@angular/core';
import { Component, OnInit,Input, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventEmitter } from '@angular/core'; 
import { FormControl, FormGroup} from '@angular/forms'; 
import { SearchbynamePipe } from '../searchbyname.pipe';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: "";
  employeeInfo : Employee[]=[]; 
  constructor(private ss : SharedService) {

  } 
  ngOnInit(): void { 
    
    this.ss.newEmployee.subscribe( (employee:Employee[])=>{
      this.employeeInfo = employee; 
    } ); 
    this.employeeInfo = this.ss.getEmployee();
  } 
}

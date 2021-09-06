import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model'; 
import { SharedService } from '../shared.service'; 


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  searchText = "";
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

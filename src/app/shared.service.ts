import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Subject } from 'rxjs'; 
import { Employee } from './employee.model'; 
@Injectable({ providedIn: 'root' }) 
export class SharedService 
{ 
  searchText: "";
  private employee: Employee[]=[]; 
  newEmployee = new BehaviorSubject<any>(Employee); 
  constructor() {
  } 
  search(){
    return this.searchText;
  }
  getEmployee(){ 
    return this.employee.slice(); 
  } 
  confirmEmployeeDetails(employeeD: Employee){ 
    this.employee.push(employeeD); 
    this.newEmployee.next(this.employee.slice()); 
  } 
}
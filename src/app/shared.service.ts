import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Subject, Observable } from 'rxjs'; 
import { Employee } from './employee.model'; 

@Injectable({ providedIn: 'root' }) 
export class SharedService 
{ 
  private content =new BehaviorSubject<string>('');
 
  public share=this.content.asObservable();
  private employee: Employee[]=[]; 
  newEmployee = new BehaviorSubject<any>(Employee); 
  constructor() {
  } 
  updateData(text:any){
    this.content.next(text);
   }
 
  getEmployee(){ 
    return this.employee.slice(); 
  } 
  confirmEmployeeDetails(employeeD: Employee){ 
    this.employee.push(employeeD); 
    this.newEmployee.next(this.employee.slice()); 
  } 
}
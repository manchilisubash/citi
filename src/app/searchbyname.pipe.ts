import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'searchbyname'
})
export class SearchbynamePipe implements PipeTransform {

  transform(employees: Employee[],searchText: string) {
    return employees.filter(e => e.name.indexOf(searchText) !== -1);
  }

}

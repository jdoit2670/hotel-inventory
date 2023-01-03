import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor() { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

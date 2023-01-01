import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

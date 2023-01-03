import { Component } from '@angular/core';
import { RoomList } from '../rooms/rooms.interface';
import { RoomsService } from '../rooms/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 250,
    rating: 1,
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  AddRoom() {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room Added Successfully';
    });
  }
}

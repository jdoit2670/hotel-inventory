import { Component, DoCheck, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'The Hotel';
  hideDetails = false;
  title = 'Room List';
  toggle = () => {
    this.hideDetails = !this.hideDetails;
    this.title = 'Rooms Lists';
  };
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  constructor() {}

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, free wifi, tv, bathroom, kitchen',
        price: 500,
        photos: 'image1',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, free wifi, tv, bathroom, kitchen',
        price: 1000,
        photos: 'image2',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air conditioner, free wifi, tv, bathroom, kitchen',
        price: 15000,
        photos: 'image3',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.6,
      },
    ];
  }

  selectedRoom!: RoomList;
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, free wifi, tv, bathroom, kitchen',
      price: 500,
      photos: 'image4',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.7,
    };

    this.roomList = [...this.roomList, room];
  }
}

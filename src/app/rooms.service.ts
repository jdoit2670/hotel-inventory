import { Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
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

  constructor() {
    console.log('Rooms service initialized');
  }

  getRooms() {
    return this.roomList;
  }
}

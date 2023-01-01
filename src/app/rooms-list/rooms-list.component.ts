import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  @Input() roomList: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() { }
  ngOnInit(): void { }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms/rooms.interface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() roomList: RoomList[] = [];
  @Input() title: string = '';
  @Input() price: number | null = 0;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() { }
  ngOnDestroy(): void {
    console.log('OnDestroy is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue;
    }
  }
  ngOnInit(): void { }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}

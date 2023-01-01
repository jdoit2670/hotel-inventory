import {
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Optional() private loggerService: LoggerService) {}
  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.hotelName = 'NewHotel';
  // }

  title = 'hotel-invetory-app';
  role = 'Admin';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
}

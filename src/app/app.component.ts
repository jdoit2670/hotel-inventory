import {
  Component,
  // ElementRef,
  Inject,
  OnInit,
  Optional,
  // ViewChild,
} from '@angular/core';
import { LoggerService } from './services/logger.service';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './services/init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService
  ) {
    console.log(this.initService.config);
  }
  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'Hilton Hotel';
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.hotelName = 'NewHotel';
  // }

  title = 'hotel-inventory-app';
  role = 'Admin';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // @ViewChild('name', { static: true }) name!: ElementRef;
}

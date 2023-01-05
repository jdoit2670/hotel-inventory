import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { ConfigService } from '../services/config.service';
import { RouteConfigToken } from '../services/routeConfig.service';
import { ShareddataService } from '../services/shareddata.service';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './rooms.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RoomsComponent],
      providers: [
        RoomsService,
        ConfigService,
        ShareddataService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: { apiEndpoint: 'https://hotel-inv-backend.onrender.com' },
        },
        {
          provide: RouteConfigToken,
          useValue: { title: 'rooms' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

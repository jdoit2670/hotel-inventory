import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group(this.bookingProperties(roomId), {
      updateOn: 'blur',
      validators: [CustomValidator.validateDate],
    });
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe(data => {})
    // });

    // this.bookingForm.valueChanges
    //   .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));
  }

  getBookingData() {
    this.bookingForm.patchValue(this.bookingData);
  }

  addGuestControl() {
    return this.fb.group({
      guestName: ['', [Validators.required]],
      age: new FormControl(''),
    });
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  bookingProperties(roomId: string | null) {
    return {
      roomId: new FormControl(
        { value: roomId, disabled: true },
        { validators: [Validators.required] }
      ),
      guestEmail: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        },
      ],
      checkinDate: [new Date()],
      checkoutDate: [new Date()],
      bookingStatus: [''],
      bookingAmount: ['250'],
      bookingDate: [new Date()],
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          CustomValidator.ValidateName,
          CustomValidator.ValidateSpecialChar('*'),
          CustomValidator.ValidateSpecialChar('!'),
        ],
      ],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    };
  }
  bookingData = {
    guestEmail: '',
    checkinDate: new Date(),
    checkoutDate: new Date(),
    bookingStatus: '',
    bookingAmount: '250',
    bookingDate: new Date(),
    mobileNumber: '',
    guestName: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    guests: [],
    tnc: false,
  };
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.bookingForm.reset(this.bookingData);
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }
}

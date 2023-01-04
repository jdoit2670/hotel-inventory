import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ConfigService } from '../services/config.service';

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

  constructor(private configService: ConfigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group(this.bookingProperties);
    this.getBookingData();
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

  bookingProperties = {
    roomId: new FormControl(
      { value: '2', disabled: true },
      { validators: [Validators.required] }
    ),
    guestEmail: ['', [Validators.required, Validators.email]],
    checkinDate: [new Date()],
    checkoutDate: [new Date()],
    bookingStatus: [''],
    bookingAmount: ['250'],
    bookingDate: [new Date()],
    mobileNumber: [''],
    guestName: ['', [Validators.required, Validators.minLength(5)]],
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
  bookingData = {
    roomId: '2',
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

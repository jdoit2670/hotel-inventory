import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
})
export class BookingModule {}

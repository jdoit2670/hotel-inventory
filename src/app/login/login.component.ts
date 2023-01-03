import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  Login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.router.navigate(['/rooms', 'add']);
    } else {
      alert('invalid credentials');
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  Login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      alert('Login successful');
    } else {
      alert('invalid credentials');
    }
  }
}

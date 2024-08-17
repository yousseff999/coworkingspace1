import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  numTel: number | null = null;

  constructor(private authService: UserService, private router: Router) { }

  onSignup(): void {
    console.log('onSignup function called');
    if (this.email && this.firstName && this.lastName && this.password && this.numTel !== null) {
      const formData: FormData = new FormData();
      formData.append('email', this.email);
      formData.append('firstName', this.firstName);
      formData.append('lastName', this.lastName);
      formData.append('password', this.password);
      formData.append('numTel', this.numTel.toString());
  
      this.authService.register(formData).subscribe(response => {
        console.log('Registration successful:', response.message);
        this.router.navigate(['/login']); // Redirect to login page
      }, error => {
        console.error('Registration failed', error);
      });
    } else {
      console.error('Please fill in all fields.');
    }
  }
  
  }




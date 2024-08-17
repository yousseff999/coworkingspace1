import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface AuthentificationRequest {
  email: string;
  password: string;
}

interface AuthentificationResponse {
  token: string;
  // Add other properties as per your response
}

interface SignupRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  numTel: number;
}

interface ApiResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:9090/auth'; // Replace with your backend URL

  constructor(private http: HttpClient, private router: Router) { }

  authentificate(request: AuthentificationRequest): Observable<AuthentificationResponse> {
    return this.http.post<AuthentificationResponse>(`${this.apiUrl}/authentificate`, request);
  }

  // Method to handle login
  login(email: string, password: string): void {
    const authRequest: AuthentificationRequest = { email, password };
    this.authentificate(authRequest).subscribe(response => {
      // Handle the response, e.g., save the token
      localStorage.setItem('authToken', response.token);

      // Redirect to the homepage
      this.router.navigate(['/pageAcceuil']);
    }, error => {
      // Handle error, e.g., display error message
      console.error('Login failed', error);
    });
  }

  private registerUrl = 'http://localhost:9090/auth'; // Replace with your backend URL
  register(signupRequest: FormData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.registerUrl}/register`, signupRequest);
  }
  

}

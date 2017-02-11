import { Component } from '@angular/core';
import { AppSettings } from '../../app.config';
import { AuthService, Credentials } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .container { padding-top: 50px; }
  `],
})
export class LoginComponent {
  credentials: Credentials;
  loginError: String;
  isLoading = false;
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private authService: AuthService, private fb:FormBuilder, private router: Router) { }

  onSubmit() {
    this.isLoading = true;
    this.loginError = null;
    this.loginForm.valid && 
    this.authService.login(this.loginForm.value)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        error => this.handleRejection(error),
      );
  }

  private handleRejection(error) {
    this.isLoading = false;
    if(error.status = 401){;
      this.loginError = JSON.parse(error._body);
    }
  }

}

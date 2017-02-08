import { Component } from '@angular/core';
import { AppSettings } from '../../app.config';
import { AuthService, Credentials } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: Credentials;
  loginError: String;
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private authService: AuthService, private fb:FormBuilder, private router: Router) { }

  onSubmit() {
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
    if(error.status = 401){;
      this.loginError = JSON.parse(error._body);
    }
  }

}

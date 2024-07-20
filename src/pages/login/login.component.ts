import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { ToastModule } from 'primeng/toast';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

constructor(
  private router: Router,
  private fb: FormBuilder,
  private authService: AuthService,
  private messageService: MessageService 
){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          
        },
        error: (error) => {
          if (error.status === 404) {
            this.messageService.add({ severity: 'error', summary: 'Not Found', detail: 'The requested resource was not found.' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An unexpected error occurred.' });
          }
        },
        complete: () => {
          this.loginForm.reset();
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}

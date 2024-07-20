import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { AuthService } from '../../auth/auth.service';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputIconModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputTextModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  onRegister() {
    if (this.registerForm.valid) {
      const credentials= this.registerForm.value;
      this.authService.register(credentials).subscribe({
        next: (response) => {

          console.log('what happens if it goes well',response)
          this.messageService.add({severity: 'success', summary: 'Registered', detail: 'New user has been registered.'});
          this.registerForm.reset();
        },
        error: (err) => {
          console.log(err)
          this.messageService.add({severity: 'error', summary: 'There was an error while registering', detail: `Error: ${err.message}`});
        }
      });
    }
  }

}

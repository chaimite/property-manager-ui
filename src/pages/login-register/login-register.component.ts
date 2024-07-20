import { Component } from '@angular/core';

import { PanelModule } from 'primeng/panel';

import { TabViewModule } from 'primeng/tabview';
import { MessageService } from 'primeng/api';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [
    PanelModule, 
    TabViewModule,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss',
  providers: [MessageService]
})
export class LoginRegisterComponent {


  
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRegisterComponent } from '../pages/login-register/login-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginRegisterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'property-manager-ui';
}

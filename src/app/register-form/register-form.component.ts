import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  email = new FormControl("default@domain.com");
  password = new FormControl("111");
  rememberMe = new FormControl(false)

  resetFormInput (){
    this.email.setValue("");
    this.password.setValue("");
    this.rememberMe.setValue(false);
  }
}

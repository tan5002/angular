import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: false,
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
    basicInfo: new FormGroup({
      firstName: new FormControl("", Validators.required), 
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    }),
    educationInfo: new FormGroup({ 
      elementarySchool: new FormControl(""),
      secondarySchool: new FormControl(""),
      highSchool: new FormControl(""),
    }),
  });

  get phone() {
    return this.profileForm.get("basicInfo")?.get("phone");
  }

  hasPhoneMinLengthError() {
    return this.phone?.errors?.["minlength"];
  }

  hasPhoneMaxLengthError() {
    return this.phone?.errors?.["maxlength"];
  }

  hasPhoneRequiredError() {
    return this.phone?.errors?.["required"];
  }
}

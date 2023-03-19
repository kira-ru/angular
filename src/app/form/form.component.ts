import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    pass: new FormControl('', [Validators.minLength(6), Validators.required]),
    address: new FormGroup({
      country: new FormControl('usa'),
      city: new FormControl('', Validators.required)
    }),
    skills: new FormArray([])
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('pass')
  }

  get country() {
    return this.loginForm.get('address').get('country')
  }

  createSkill() {
    const control = new FormControl('');
    // (this.loginForm.get('skills') as FormArray).push(control)
    (<FormArray>this.loginForm.get('skills')).push(control)
  }

  setCapital() {
    const capitals = {
      'ru': 'Mos',
      'usa': 'Wash',
      'uk': 'Kiev',
    }

    const city = capitals[this.country.value]
    this.loginForm.patchValue({
      address: {city: city}
    })
  }

  submitHandler() {
    console.log(this.loginForm.value)
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {


  loginForm! : FormGroup
  constructor(private fb: FormBuilder)
  {
    this.loginForm = this.fb.group({
      userName : ['', Validators.required],
      password : ['', Validators.required],

    });
  }



  ngOnInit() : void {
      
  }






  passwordVisible = false;
  // Method to toggle password visibility
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }


}

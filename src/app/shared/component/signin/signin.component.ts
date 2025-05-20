import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

 LoginForm !: FormGroup
  SignUpForm !: FormGroup
  allreadyHasAcc: boolean = true


  constructor(
   
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
    this.createSignUpForm()
  }

  createLoginForm() {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  createSignUpForm() {
    this.SignUpForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    })
  }

  onSignin() {
    if (this.LoginForm.valid) {
      let singUser = this.LoginForm.value
      // this._auth.signIn(singUser).subscribe({
      //   next: res => {
      //     this.LoginForm.reset()
      //     this._router.navigate(['home'])
      //     this._snackbar.opensnack(res.message)
      //     this._auth.savetoken(res.token)
      //     this._auth.saveUserrole(res.userRole)
      //   },
      //   error: err => {
      //     this._snackbar.opensnack(err.message)
      //   }
      // })
    }
  }

  onSignUp() {
     if(this.SignUpForm.valid) {
      let singUpUser = this.SignUpForm.value
      // console.log(singUpUser);
      // this._auth.signUp(singUpUser).subscribe({
      //   next: res => {
      //     this.SignUpForm.reset()
      //     this.allreadyHasAcc = true
      //     this._snackbar.opensnack(res.message)
      //   },
      //   error: err => {
      //     this._snackbar.opensnack(err.error.message)
      //   }
      // })
    }
  }

}

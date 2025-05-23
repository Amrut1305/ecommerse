import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';
import { Ilogin, Isignup } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    BASE_URL : string = environment.auth_url

  // https://auth-git-main-iamrkjs-projects.vercel.app/api/auth/register
  constructor(
    private _Http : HttpClient,
    private _snack : SnackbarService,
    private _router : Router
  ) { }

  signIn(obj:Ilogin): Observable<any>{
    let signInUrl : string = `${this.BASE_URL}/api/auth/login`
    return this._Http.post(signInUrl, obj)
  }

  signUp(obj:Isignup): Observable<any>{
    let signUpUrl : string = `${this.BASE_URL}/api/auth/register`
    return this._Http.post(signUpUrl, obj)
  }

  savetoken(token : string){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  saveUserrole(userRole : string){
    localStorage.setItem('userRole', userRole)
  }

  getUserrole(){
   return localStorage.getItem('userRole')
  }

  logout(){
    localStorage.removeItem('userRole')
    localStorage.removeItem('token')
    this._snack.opensnack(`You are logout successfully`)
    this._router.navigate([''])
  }structor() { }
}

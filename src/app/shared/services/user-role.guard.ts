import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _authServe = inject(AuthService)
  private _snackbar = inject(SnackbarService)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userRole = this._authServe.getUserrole()
    let userArr = route.data['userRole']

    if(userArr.includes(userRole)){
      return true
    }else{
      this._snackbar.opensnack(`you are not authorised to access`)
      return false
    }
  }

}

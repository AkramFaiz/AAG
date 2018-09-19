import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouterModule, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  res: boolean;
  constructor(private loginS: LoginService, private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.loginS.loginSts.subscribe(res => {this.res = res ;
         console.log(this.res); }) ;
      if (this.res) { return true; } else { this.route.navigate(['/']); return false; }
  }
}

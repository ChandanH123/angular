import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){}


  canActivate(): boolean{
    //console.log(this.auth.loggedIn());
      if(this.auth.loggedIn())
      { 
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
  }
  
}

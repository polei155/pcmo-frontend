import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: string | null = localStorage.getItem('access-token') || null;

    if (token === null) this.redirectToSignIn();

    try {
      // TODO: check expiry of the token
    } catch {
      alert('Invalid Token');
      this.redirectToSignIn();
    }

    return true;
  }

  private redirectToSignIn(): boolean {
    this.router.navigateByUrl('signin');
    return false;
  }

}
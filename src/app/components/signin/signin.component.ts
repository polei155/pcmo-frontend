import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, Subject, Subscription, takeUntil } from 'rxjs';
import { LoginService, User } from 'src/app/shared/services/login.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  @ViewChild('signUp') public signUp!: SignupComponent;
  public formGroup!: FormGroup;
  public signUpFormGroup!: FormGroup;
  public subscription!: Subscription;

  private readonly destroy$ = new Subject<void>();

  constructor(
    public router: Router,
    public loginService: LoginService
  ){ }

  public ngOnInit(): void {
    this.initializeFormGroup();
  }

  public initializeFormGroup(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })

    this.signUpFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email, Validators.max(5)]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    })
  }

  public onRegister(userData: User): void {
    this.loginService.register(userData)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: any) => {
      if(response.success){
        
      }
    })
  }

  public async login(): Promise<void> {
    const payload = {
      username: this.formGroup.get('username')?.value,
      password: this.formGroup.get('password')?.value,
    }

    
    if(this.formGroup.valid){

      this.loginService.login(payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        if(response.success){
          localStorage.setItem('access-token', response.access_token);
          this.router.navigateByUrl('/home');
        }
      })
    }
  }

  public showSignUp(): void {
    this.signUp.isVisible = true;
  }

ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}

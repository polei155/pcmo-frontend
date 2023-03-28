import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public isVisible: boolean = false;
  public passwordtype: string = 'password';
  public hide: boolean = true;
  @Input('formGroup') public formGroup!: FormGroup;
  @Output('register') public register: EventEmitter<User> = new EventEmitter();

  public toggleModal(): void {
    this.isVisible = !this.isVisible;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleOk(): void {
    if(this.formGroup.valid){
      this.register.emit(this.formGroup.value);
      this.formGroup.reset();
      this.isVisible = false;
    }

  }

  public toggleShow(): void {
    this.hide = !this.hide;
    this.hide ? this.passwordtype = 'password' : this.passwordtype = 'text' 
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{

  loginform: FormGroup = new FormGroup( {
    email: new FormControl(null,  [ Validators.email, Validators.required ]),
    password: new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z]/)] )
  })


  error: string = ''
  isloading:boolean=false
  submitloginform ( loginform: FormGroup )
  {
    this.isloading = true
    // console.log( loginform.get( 'first_name' )?.errors )
    this._AuthService.signUp( loginform.value ).subscribe( {
      next: ( response ) =>
      {
        this.isloading = false;
        if ( response.message === 'success' )
        {
          localStorage.setItem( 'userToken', response.token )
          this._AuthService.saveUserData();
          this._Router.navigate(['/home'])
        }
        else{
          this.error = response.message
        }
      }
    })
}

  constructor( private _AuthService:AuthService, private _Router:Router )  {}
ngOnInit (): void
{


  }

}

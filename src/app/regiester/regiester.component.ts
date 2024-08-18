import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regiester',
  templateUrl: './regiester.component.html',
  styleUrl: './regiester.component.css'
} )


export class RegiesterComponent implements OnInit
{
  regiesterform: FormGroup = new FormGroup( {
    first_name: new FormControl(null, [Validators.minLength(3),Validators.pattern(/^[A-Z][a-z]{3,6}/), Validators.maxLength(10), Validators.required ]),
    last_name: new FormControl(null,   [Validators.minLength(3), Validators.maxLength(10), Validators.required ]),
    age: new FormControl(null,  [Validators.min(16), Validators.max(90), Validators.required ]),
    email: new FormControl(null,  [ Validators.email, Validators.required ]),
    password: new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z]/)] )
  })


  error: string = ''
  isloading:boolean=false
  submitRegisterForm ( regiesterform: FormGroup )
  {
    this.isloading = true
    // console.log( regiesterform.get( 'first_name' )?.errors )
    this._AuthService.signin( regiesterform.value ).subscribe( {
      next: ( response ) =>
      {
        this.isloading = false;
        if ( response.message === 'success' )
        {

          this._Router.navigate(['/login'])
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { json } from 'stream/consumers';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor ( private _HttpClient: HttpClient, private _Router: Router )
  {
    //  if (localStorage.getItem('userToken' ) !=null )
    {
      this.saveUserData()
    }
   }
  userData:any = new BehaviorSubject( null )


  saveUserData ()
  {
    //get token from local storage
    // decode
    // let encodedToken = JSON.stringify( localStorage.getItem( 'userToken' ))
    // let decodedToken = jwtDecode( encodedToken )
    // this.userData.next(decodedToken)
  }

  signOut ()
  {
    localStorage.removeItem( 'userToken' );
    this.userData.next( null )
    this._Router.navigate(['/login'])

  }

  signUp ( UserData: object ):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokupp.com/signup/' ,UserData);
  }
  signin ( UserData: object ):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokupp.com/signin/' ,UserData);
  }
}

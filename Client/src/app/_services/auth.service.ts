import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
interface myData {
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private loggedInStatus = false;
  private _url = environment.api_url ;
  constructor(private _http: HttpClient) {
   }
   
   login2(username: string, password: string): Observable<boolean> {
    return this._http.post<{token: string}>(this._url+'/users/login', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          console.log(localStorage);
          return true;
        })
      );
  }
  
  logout() {
    localStorage.removeItem('access_token');
  }
  
  getToken() {
    return localStorage.getItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
/*
  public validate(username:string, password:string) {
    
    return this._http.post(this._url + '/users/login',
     {username : username, password : password},
     {
      withCredentials: true
    }
      
    ).subscribe((resp: any) => {
      this.loggedIn.next(true);
      console.log("toastr");
     // this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
    }, (errorResp) => {
      this.loggedIn.next(false);
      errorResp.error ? console.log(errorResp.error.errorMessage) : console.log('An unknown error has occured.');
    });
    
  }

  


  login(username:string, password:string){
   const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    this._http.post(this._url + '/users/login', 
    {
      username:username,
      password:password
    }, 

    
    {
    //  withCredentials: true,
      headers: headers
    }
    )  .subscribe((user) => {
      // login successful if there's a user in the response
      if (user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
        //  user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
  });
  }
/*
  getLogin(){
    this._http.get(this._url + 'users/login', {
      withCredentials: true  // <=========== important!
    })
    .subscribe((resp: any) => {
      this.loggedIn.next(resp.loggedIn);
    }, (errorResp) => {
     console.log('Oops, something went wrong getting the logged in status')
    })
  }
/*/
  logout22() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }    
}

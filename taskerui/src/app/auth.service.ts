import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'ionicons/icons';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiUrl: string = "https://localhost:7115";

  constructor(private http: HttpClient, private cookieService: CookieService) {
    //this.loadUser();
   }

  user: any = null;

  loadUser(){
    return this.http.get<any>(this.ApiUrl + "/user")
    .subscribe(user => {
      console.log(user)
      this.user = user;
    })
  }

  login(loginForm: any){
    return this.http.post<any>(this.ApiUrl + "/login?useCookies=true&useSessionCookies=true", loginForm, {withCredentials: true})
    .subscribe(_ => {

    })
  }
  register(){}

  logout(){
    console.log("logging out");
    this.cookieService.delete("cookie", "/");
    return this.http.post("https://localhost:7115/logout", {})
    .subscribe(_ => this.user = null)
  }
}

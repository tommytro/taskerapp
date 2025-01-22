import { Component, OnInit, EnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_USER_BY_ID, CHECK_USERNAME } from '../GraphQL/graphql.queries';
import { CREATE_USER } from '../GraphQL/graphql.mutations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonHeader, IonList, IonButton, IonInput, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class LoginComponent {

  constructor(private auth: AuthService, private apollo: Apollo) { }

  public environmentInjector = inject(EnvironmentInjector);
  username: string = "";
  password: string = "";
  email: string = "";
  confirmPassword: string; 
  isCreatingAccount: boolean = false;

  login(){
    console.log("Logging in", this.email, this.password);
    return this.auth.login({
      email: this.email,
      password: this.password
    })
  }




  async onCreateAccount() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    if(await this.checkUserNameExists()) {
      console.error('Username already exists');
      return;
    }else{
      console.log('Username does not exist');
    }

    const hashedPassword = await this.hashPassword(this.password, this.email);

    this.apollo.mutate({
      mutation: CREATE_USER,
      variables: {
        userName: this.username,
        email: this.email,
        password: hashedPassword
      },
    }).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });

  }

  toggleForm() {
    this.isCreatingAccount = !this.isCreatingAccount;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private checkUserNameExists(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log("Checking if username exists", this.username);
      this.apollo.query({
        query: CHECK_USERNAME,
        variables: {
          username: this.username
        }
      }).subscribe((response: any) => {
        if (response.data && response.data.checkUsername && response.data.checkUsername.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, (error) => {
        console.log('there was an error sending the query', error);
        reject(error);
      });
    });
  }
}

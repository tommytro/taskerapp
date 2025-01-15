import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from '../GraphQL/graphql.queries';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, IonInput, IonItem, IonList],
})
export class UserDisplayComponent  implements OnInit {

  users: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_USERS,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result.data && result.data.users;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}

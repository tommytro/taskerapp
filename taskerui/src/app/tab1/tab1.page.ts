import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UserDisplayComponent } from "../user-display/user-display.component";
import { RightMenuComponent } from "../right-menu/right-menu.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UserDisplayComponent, RightMenuComponent],
})
export class Tab1Page {
  constructor() {}
}

import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonFab, IonFabButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle,  IonContent, IonButtons, IonMenuButton, IonList, IonItem} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, logOutOutline } from 'ionicons/icons';
import { RightMenuComponent } from "../right-menu/right-menu.component";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu, IonHeader, 
IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  title = 'client';

  constructor(private auth: AuthService) {
    addIcons({ triangle, ellipse, square, logOutOutline });
  }

  logout(){
    return this.auth.logout()
  }
}

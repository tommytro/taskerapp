import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonInput, IonItem, IonLabel, IonList, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-task-entry-modal',
  templateUrl: './task-entry-modal.component.html',
  styleUrls: ['./task-entry-modal.component.scss'],
  providers: [ModalController],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, 
   IonButtons, IonIcon, FormsModule] 
})
export class TaskEntryModalComponent  implements OnInit {
  private modalController: ModalController = inject(ModalController);
  text: string;
  constructor() {
    addIcons({ close });
   }

  ngOnInit() {}
  
  submit() {}

  dismiss() {
    this.modalController.dismiss();
  }
}

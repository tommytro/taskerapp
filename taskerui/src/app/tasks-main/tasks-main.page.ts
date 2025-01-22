import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { addIcons } from 'ionicons';
import { IonIcon, IonFab, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { add } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { TaskEntryModalComponent } from '../task-entry-modal/task-entry-modal.component';

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.page.html',
  styleUrls: ['./tasks-main.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonIcon, IonFab, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
}) 
export class TasksMainPage implements OnInit {
  private modalController: ModalController = inject(ModalController);

  constructor(private apollo: Apollo) {
    addIcons({ add });
   }

  ngOnInit() {
  }

  async createTask(){
    const modal = await this.modalController.create({
      component: TaskEntryModalComponent,
    });
    return await modal.present();
  }
}

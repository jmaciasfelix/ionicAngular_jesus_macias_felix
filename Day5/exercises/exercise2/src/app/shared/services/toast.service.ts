//angular
import { Injectable } from '@angular/core';
//ionic
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  /**
   * Constructor
   * @param toastController toastCotnroller ionic angular
   */
  constructor(public toastController: ToastController) {}
  /**
   * Show a toast for 2 seconds
   */
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
}
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        { text: 'Cancel', handler: () => this.patata('Cancel') },
        { text: 'Accept', handler: () => this.patata('Accept') }
      ]
    });

    await alert.present();
  }

  alertWithPromise() {
    this.alertController
      .create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: [
          { text: 'Cancel', handler: () => this.patata('Cancel') },
          { text: 'Accept', handler: () => this.patata('Accept') }
        ]
      })
      .then((alert) => alert.present());
  }

  private patata(text: string): void {
    console.log(`Ha pulsado ${text}`);
  }
}

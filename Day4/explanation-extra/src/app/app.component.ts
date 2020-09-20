// angular
import { Component } from '@angular/core';

// ionic
import { Platform } from '@ionic/angular';

// ionic-native
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent {

  /**
   * component constructor
   *
   * @param platform ionic platform
   * @param splashScreen ionic-native splash screen
   * @param statusBar ionic-native status bar
   */
  constructor(
    private readonly platform: Platform,
    private readonly splashScreen: SplashScreen,
    private readonly statusBar: StatusBar) {

    this.initializeApp();
  }

  /**
   * initialize the application
   */
  private async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}

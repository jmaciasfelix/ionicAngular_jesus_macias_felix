//angular
import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
//ionic native
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
//translate
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public actualLang: string = "es";
  public appPages = [
    {
      title: "MENU.HOME",
      url: "/home",
      icon: "home",
    },
    {
      title: "MENU.FORM_TEMPLATE",
      url: "/template-driven-form",
      icon: "clipboard",
    },
    {
      title: "MENU.FORM_REACTIVE",
      url: "/reactive-form",
      icon: "clipboard",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.use(this.actualLang);
    });
  }

  public toggleLang() {
    this.actualLang === "es"
      ? (this.actualLang = "en")
      : (this.actualLang = "es");
    this.translate.use(this.actualLang);
  }
}

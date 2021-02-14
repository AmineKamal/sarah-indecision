import { Component, HostListener } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

declare var mouseX;
declare var mouseY;
declare var particles;
declare var createParticle;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  @HostListener("document:click", ["$event"])
  onclick(ev: any) {
    mouseX = ev.clientX || ev.pageX;
    mouseY = ev.clientY || ev.pageY;
    console.log(ev);

    particles.push(new createParticle());
  }
}

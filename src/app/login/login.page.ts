import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonInput, ToastController } from "@ionic/angular";

const HASH = "53d162a53123028170eaf11d3b013c6caf0ab97fc56b912acfc3e4b25c4ee887fc13ab434cde2fc89d52bd20cb528e58f85158c6b941be6fa19f04b0dc28e0d1";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("name") name: IonInput;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  scrolling(e: any, c: number) {
    e.scrollIntoView();

    if (c < 5)
    {
      setTimeout(() => this.scrolling(e, c + 1), 300);
    }
  }

  ensureVisible()
  {
    setTimeout(() => window.scroll(0, document.documentElement.offsetHeight), 300);
  }

  async login() {
    const val = this.name.value;

    let toast: HTMLIonToastElement;

    if (!val) {

      toast = await this.toastController.create({
        color: "danger",
        message: "Le nom n'est pas correct.",
        duration: 1000
      });

      return await toast.present();
     }

    const hash = await this.sha512(val.toString().toUpperCase());

    if (hash !== HASH) {
      toast = await this.toastController.create({
        color: "danger",
        message: "Le nom n'est pas correct.",
        duration: 1000
      });

      return await toast.present();
    }

    localStorage.setItem("HASH", hash);

    toast = await this.toastController.create({
      color: "primary",
      message: "Félicitation vous pouvez continuer.",
      duration: 1000
    });

    await toast.present();

    this.router.navigate(["home"]);
  }

  async sha512(str: string) {
    const buf = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), (x: any) => (("00" + x.toString(16)).slice(-2))).join("");
  }

}

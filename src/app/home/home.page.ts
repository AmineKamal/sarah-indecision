import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { VideoPlayerComponent } from "../video-player/video-player.component";
import { Router } from "@angular/router";
import { RoulettePage } from "../roulette-home/roulette/roulette.page";
import { demanderAUtilisateur } from "./src/calc";
import { DaysSincePage } from "../days-since/days-since.page";
import { GymProgressionPage } from "../gym-progression/gym-progression.page";
import { RouletteHomePage } from "../roulette-home/roulette-home.page";


interface ListItem {
  options: string[];
  name: string;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public constructor(
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  calc() {
    demanderAUtilisateur();
  }

  async roulette() {
    const modal = await this.modalController.create({
      component: RouletteHomePage,
      swipeToClose: false,
      componentProps: {
        back: async () => await modal.dismiss(),
      },
    });

    return await modal.present();
  }

  async video() {
    const modal = await this.modalController.create({
      component: VideoPlayerComponent,
      swipeToClose: false,
      componentProps: {
        back: async () => await modal.dismiss(),
      },
    });

    return await modal.present();
  }

  logout() {
    localStorage.setItem("HASH", "");
    this.router.navigate(["login"]);
  }

  async daysSince()
  {
    const modal = await this.modalController.create({
      component: DaysSincePage,
      swipeToClose: false,
      componentProps: {
        back: async () => await modal.dismiss(),
      },
    });

    return await modal.present();
  }

  async gymProgression()
  {
    const modal = await this.modalController.create({
      component: GymProgressionPage,
      swipeToClose: false,
      componentProps: {
        back: async () => await modal.dismiss(),
      },
    });

    return await modal.present();
  }
}

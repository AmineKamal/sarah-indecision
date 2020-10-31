import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EditListComponent } from "../edit-list/edit-list.component";
import { VideoPlayerComponent } from "../video-player/video-player.component";
import { Router } from "@angular/router";
import { RoulettePage } from "../roulette/roulette.page";
import { demanderAUtilisateur } from "./calc";


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

  public list: ListItem[] = [];

  ngOnInit() {
    if (localStorage.getItem("list")) {
      this.list = JSON.parse(localStorage.getItem("list"));
    }
  }

  async openModal(id?: number) {
    const nw = typeof id === "number" ? false : true;
    id = id ?? this.list.push({ name: "", options: [] }) - 1;

    const modal = await this.modalController.create({
      component: EditListComponent,
      swipeToClose: false,
      componentProps: {
        mclose: async (save = false) => await this.close(modal, nw, save),
        save: (list: string[], name: string) => this.save(id, list, name, nw),
        list: this.list[id].options,
        name: this.list[id].name,
      },
    });

    return await modal.present();
  }

  async close(modal: HTMLIonModalElement, nw: boolean, save: boolean) {
    await modal.dismiss();
    if (nw && !save) {
      this.list.pop();
    }
    this.update();
  }

  save(id: number, options: string[], name: string, nw: boolean) {
    if (!name || options.length === 0) {
      alert("Le formulaire est incomplet.");
      if (nw) {
        this.list.pop();
      }

      this.update();
      return;
    }

    this.list[id] = { options, name };
    this.update();
  }

  remove(id: number) {
    this.list.splice(id, 1);
    this.update();
  }

  update() {
    localStorage.setItem("list", JSON.stringify(this.list));
  }

  calc() {
    demanderAUtilisateur();
  }

  async roulette(id: number) {
    const modal = await this.modalController.create({
      component: RoulettePage,
      swipeToClose: false,
      componentProps: {
        back: async () => await modal.dismiss(),
        options: this.list[id].options,
        title: this.list[id].name
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
}

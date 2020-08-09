import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EditListComponent } from "../edit-list/edit-list.component";
import { Router } from "@angular/router";

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
    id = id ?? this.list.push({ name: "", options: [] }) - 1;

    const modal = await this.modalController.create({
      component: EditListComponent,
      swipeToClose: true,
      componentProps: {
        close: async () => await modal.dismiss(),
        save: (list: string[], name: string) => this.save(id, list, name),
        list: this.list[id].options,
        name: this.list[id].name,
      },
    });

    return await modal.present();
  }

  save(id: number, options: string[], name: string) {
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

  roulette(id: number) {
    this.router.navigate(["/roulette"], {
      queryParams: { options: this.list[id].options },
    });
  }
}

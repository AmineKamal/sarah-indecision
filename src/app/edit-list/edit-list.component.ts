import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { IonInput } from "@ionic/angular";

@Component({
  selector: "app-edit-list",
  templateUrl: "./edit-list.component.html",
  styleUrls: ["./edit-list.component.scss"],
})
export class EditListComponent implements OnInit {
  @Input() list: string[];
  @Input() name: string;
  @Input() mclose: (save?: boolean) => Promise<void>;
  @Input() save: (list: string[], name: string) => void;
  @ViewChild("nwItem") nwItem: IonInput;

  constructor() {}

  ngOnInit() {}

  add(nwItem: string | number) {
    if (nwItem) {
      this.list.push(nwItem as string);
    }
  }

  async close() {
    if (!this.name || !this.list || this.list.length === 0) {
      return await this.mclose();
    }

    const save = confirm("Veux tu sauvegarder ta liste?");
    if (save) {
      await this.complete();
    } else {
      await this.mclose();
    }
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  update(i: number) {
    this.list[i] = prompt();
  }

  async complete() {
    if (!this.name || !this.list || this.list.length === 0) {
      return alert("La liste est incomplète.");
    }

    if (this.nwItem.value) {
      this.list.push(this.nwItem.value.toString());
    }

    this.save(this.list, this.name);
    await this.mclose(true);
  }
}

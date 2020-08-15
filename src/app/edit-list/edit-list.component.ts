import { Component, OnInit, Input } from "@angular/core";

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

    this.save(this.list, this.name);
    await this.mclose(true);
  }
}

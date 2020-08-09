import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-edit-list",
  templateUrl: "./edit-list.component.html",
  styleUrls: ["./edit-list.component.scss"],
})
export class EditListComponent implements OnInit {
  @Input() list: string[];
  @Input() name: string;
  @Input() close: () => Promise<void>;
  @Input() save: (list: string[], name: string) => void;

  constructor() {}

  ngOnInit() {}

  add(nwItem: string) {
    if (nwItem) {
      this.list.push(nwItem);
    }
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  update(i: number) {
    this.list[i] = prompt();
  }

  async complete() {
    if (!this.name || !this.list) {
      return alert("La liste est incomplète.");
    }

    this.save(this.list, this.name);
    await this.close();
  }
}

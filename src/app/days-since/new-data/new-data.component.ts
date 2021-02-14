import { Component, Input, OnInit } from "@angular/core";
import { IonDatetime } from "@ionic/angular";
import { DateData } from "src/app/utils/types";

@Component({
  selector: "app-new-data",
  templateUrl: "./new-data.component.html",
  styleUrls: ["./new-data.component.scss"],
})
export class NewDataComponent implements OnInit {
  @Input() addData: (data: DateData) => void;
  @Input() back: () => Promise<void>;

  @Input() public title: string;
  @Input() public date: Date;
  @Input() public hour: Date;

  constructor() { }

  ngOnInit() {}

  add() {
    if (!this.title || !this.date || !this.hour) {
      return;
    }

    console.log(this.title, new Date(this.date), new Date(this.hour));
  }
}

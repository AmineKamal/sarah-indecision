import { formatNumber, pad } from "../utils/string";
import { Component, Input, OnInit } from "@angular/core";
import { floor } from "../utils/object";
import { DateData, DateSince } from "../utils/types";
import { PopoverController } from "@ionic/angular";
import { NewDataComponent } from "./new-data/new-data.component";
import ConfettiGenerator from "confetti-js";

@Component({
  selector: "app-days-since",
  templateUrl: "./days-since.page.html",
  styleUrls: ["./days-since.page.scss"],
})
export class DaysSincePage implements OnInit {
  @Input() back: () => Promise<void>;
  public date: DateSince;
  public title: string;

  private data: DateData[] = [];
  private defaultData = { title: "Le temps écoulé depuis la première fois qu'on s'est rencontré.", epoch: 1581721200000 };
  private epoch: number;
  private interval: any;
  private readonly keys = ["s", "min", "h", "days", "weeks", "months", "years", "summary"] as const;
  public currentIndex = 7;
  // tslint:disable-next-line:variable-name
  public _current: keyof DateSince = "summary";
  public frenchTerms =
  { s: "Secondes", min: "Minutes", h: "Heures", days: "Jours", weeks: "Semaines", months: "Mois", years: "Années", summary: ["Jours", "Heures", "Minutes", "Secondes", "Années"] };

  public animate = false;
  public showSummaryYears = false;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.loadData();
    this.applydata();
    this.date = this._date;
    this.interval = setInterval(() =>
    {
      this.date = this._date;
    }, 1000);
  }

  public async goBack() {
    clearInterval(this.interval);
    await this.back();
  }

  public next() {
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    this._current = this.keys[this.currentIndex];
  }

  public get current() {
    const current = this.date[this._current];
    return Array.isArray(current) ? current : formatNumber(current);
  }

  public applydata(data: DateData = this.defaultData) {
    this.epoch = data.epoch;
    this.title = data.title;
  }

  public async add(ev: any) {
    const popover = await this.popoverController.create({
      component: NewDataComponent,
      cssClass: "date-popover",
      event: ev,
      translucent: false,
      componentProps: {
        addData: (data: DateData) => this.addData(data),
        back: async () => await popover.dismiss(),
      }
    });

    return await popover.present();
  }

  private addData(data: DateData) {
    this.data.push(data);
    localStorage.setItem("dateData", JSON.stringify(this.data));
  }

  private loadData() {
    const data = localStorage.getItem("dateData");
    if (!data) {
      this.data = [];
      return;
    }

    const dateData = JSON.parse(data);
    if (!dateData || !Array.isArray(dateData)) {
      this.data = [];
      return;
    }

    this.data = dateData;
  }

  private get _date(): DateSince {
    const offset = 1000 * 3600 * 24;
    const ms = new Date().getTime() - (this.epoch + offset);
    const s = ms / 1000;
    const min = s / 60;
    const h = min / 60;
    const days = h / 24;
    const weeks = days / 7.01923076;
    const years = weeks / 52;
    const months = years * 12;

    const date = floor({
      ms,
      s,
      min,
      h,
      days,
      weeks,
      years,
      months
    });

    const sdays = Math.floor(days);
    const sh = Math.floor(h) % 24;
    const smin = Math.floor(min) % 60;
    const ss = Math.floor(s) % 60;
    const syears = Math.floor(years);

    if (syears >= 1 && !this.showSummaryYears) {
      this.showSummaryYears = true;

      setTimeout(() =>
      {
        const div = document.getElementById("days-since-years");
        let scale = 0;
        div.style.setProperty("transform", `scale(${scale}, ${scale})`);

        const interval = setInterval(() =>
        {
          scale += 0.05;
          div.style.setProperty("transform", `scale(${scale}, ${scale})`);

          if (scale >= 1)
          {
            this.animate = true;
            const confettiSettings = { target: "my-canvas" };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            clearInterval(interval);
          }
        }, 100);

      }, 0);
    }

    const summary = [pad(sdays), pad(sh), pad(smin), pad(ss), pad(syears)];

    return {
      ...date,
      summary
    };
  }
}

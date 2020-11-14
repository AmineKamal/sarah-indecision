import { formatNumber } from "../utils/string";
import { Component, Input, OnInit } from "@angular/core";
import { floor } from "../utils/object";
import { DateSince } from "../utils/types";

@Component({
  selector: "app-days-since",
  templateUrl: "./days-since.page.html",
  styleUrls: ["./days-since.page.scss"],
})
export class DaysSincePage implements OnInit {
  @Input() back: () => Promise<void>;
  public date: DateSince;

  private readonly epoch = 1581723000000;
  private interval: any;
  private readonly keys = ["s", "min", "h", "days", "weeks", "months", "years"] as const;
  public currentIndex = 4;
  // tslint:disable-next-line:variable-name
  public _current: keyof DateSince = "days";
  public frenchTerms = { s: "Secondes", min: "Minutes", h: "Heures", days: "Jours", weeks: "Semaines", months: "Mois", years: "Années" };

  constructor() { }

  ngOnInit() {
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
    return formatNumber(this.date[this._current]);
  }

  private get _date(): DateSince {
    const ms = Date.now() - this.epoch;
    const s = ms / 1000;
    const min = s / 60;
    const h = min / 60;
    const days = h / 24;
    const weeks = days / 7;
    const years = weeks / 52;
    const months = years * 12;

    return floor({
      ms,
      s,
      min,
      h,
      days,
      weeks,
      years,
      months
    });
  }
}

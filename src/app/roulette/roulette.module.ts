import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RoulettePageRoutingModule } from "./roulette-routing.module";

import { RoulettePage } from "./roulette.page";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RoulettePageRoutingModule],
  declarations: [RoulettePage, HeaderComponent, FooterComponent],
})
export class RoulettePageModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { EditListComponent } from "./edit-list/edit-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { NewDataComponent } from "./days-since/new-data/new-data.component";

@NgModule({
  declarations: [AppComponent, EditListComponent, VideoPlayerComponent, NewDataComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

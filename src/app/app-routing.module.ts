import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "roulette",
    loadChildren: () =>
      import("./roulette/roulette.module").then((m) => m.RoulettePageModule),
      canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then( m => m.LoginPageModule)
  },
  {
    path: "days-since",
    loadChildren: () => import("./days-since/days-since.module").then( m => m.DaysSincePageModule),
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

const HASH = "53d162a53123028170eaf11d3b013c6caf0ab97fc56b912acfc3e4b25c4ee887fc13ab434cde2fc89d52bd20cb528e58f85158c6b941be6fa19f04b0dc28e0d1";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (!localStorage.getItem("HASH")) {
            this.router.navigate(["login"]);
            return false;
        }

        if (localStorage.getItem("HASH") !== HASH) {
            this.router.navigate(["login"]);
            return false;
        }

        return true;
    }
}

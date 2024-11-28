import { Routes } from "@angular/router";
import { UserRouter } from "../modules/users/routes/user-route.route";

export const routes: Routes = [
    {
        path: "users",
        children: UserRouter.routes()
    }
];

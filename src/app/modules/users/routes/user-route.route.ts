import { Routes } from "@angular/router";
import { userRoutes } from "./user.routes";

export class UserRouter {
    static routes(): Routes {
        return userRoutes;
    }
}
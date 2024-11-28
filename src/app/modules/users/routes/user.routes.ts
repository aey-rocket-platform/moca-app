import { Routes } from "@angular/router";

export const userRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("../pages/user-page/user-page.component").then(c => c.UserPageComponent),
        children: [
            {
                path: "all",
                loadComponent: () => import("../components/user-list/user-list.component").then(m => m.UserListComponent)
            }
        ]
    },
    {
        path: "profile",
        loadComponent: () => import("../pages/profile-page/profile-page.component").then(c => c.ProfilePageComponent)
    }
]
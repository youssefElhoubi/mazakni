import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"/test",
        loadComponent:()=> import("../app/header/header.component").then(m=>m.HeaderComponent)
    }
];

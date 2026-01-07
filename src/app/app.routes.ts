import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent:()=> import("../app/home/home.component").then(m=>m.HomeComponent)
    },
    {
        path:"a",
        loadComponent:()=> import("../app/music-list/music-list.component").then(m=>m.MusicListComponent)
    },
];

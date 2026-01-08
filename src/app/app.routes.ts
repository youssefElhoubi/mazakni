import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent:()=> import("../app/home/home.component").then(m=>m.HomeComponent)
    },
    {
        path:"music/:id",
        loadComponent:()=> import("../app/music-player/music-player.component").then(m=>m.MusicPlayerComponent)
    },
    {
        path:"**",
        loadComponent:()=> import("../app/not-found/not-found.component").then(m=>m.NotFoundComponent)
    },
];

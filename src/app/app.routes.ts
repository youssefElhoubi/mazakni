import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent:()=> import("./layouts/home/home.component").then(m=>m.HomeComponent)
    },
    {
        path:"music/:id",
        loadComponent:()=> import("./layouts/music-player/music-player.component").then(m=>m.MusicPlayerComponent)
    },
    {
        path:"upload",
        loadComponent:()=> import("./layouts/upload/upload.component").then(m=>m.UploadComponent)
    },
    {
        path:"**",
        loadComponent:()=> import("../app/not-found/not-found.component").then(m=>m.NotFoundComponent)
    },
];

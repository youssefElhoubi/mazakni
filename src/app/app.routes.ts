import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path:"",
    //     loadComponent:()=> import("../app/app.component").then(m=>m.AppComponent)
    // },
    {
        path:"a",
        loadComponent:()=> import("../app/music-list/music-list.component").then(m=>m.MusicListComponent)
    },
];

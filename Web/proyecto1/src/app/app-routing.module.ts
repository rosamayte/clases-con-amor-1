import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ShowVideosComponent } from './pages/show-videos/show-videos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'videos', component: ShowVideosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

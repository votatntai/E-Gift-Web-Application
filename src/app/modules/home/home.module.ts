import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        MatIconModule,
        MatButtonModule,
        FuseCardModule
    ]
})
export class HomeModule {
}

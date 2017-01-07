import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './cpt.navigation';
import {NotFoundComponent} from "./subModules/md.404/cpt.404";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./subModules/md.login/cpt.login";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'index.html',
                pathMatch: 'full'
            },
            {
                path: "index.html",
                loadChildren: "../md.index/md.index#IndexModule"
            },
            {
                path: 'circle',
                loadChildren: "../md.circle/md.circle#CircleModule"
            },
            {
                path: 'ranking',
                loadChildren: "../md.ranking/md.ranking#RankingModule"
            },
            {
                path: 'charts',
                loadChildren: "../md.charts/md.charts#ChartsModule"
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

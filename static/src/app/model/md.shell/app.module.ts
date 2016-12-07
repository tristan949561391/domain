import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {LoginComponent} from "./cpt.login";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'index.html',
                pathMatch: 'full'
            },
            {
                path: "index.html",
                loadChildren: "../md.index/md.index#IndexModule",
                data: {
                    preload: true
                }
            },
            {
                path: "publicGallary.html",
                loadChildren: "../md.publicGallary/md.publicGallary#publicGallaryModule",
                data: {
                    preload: true
                }
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

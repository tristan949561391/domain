import {NgModule}       from '@angular/core';

import {CommonModule}   from '@angular/common';
import {RouterModule} from "@angular/router";
import {publicGallaryModuleComponent} from "./cpt.publicGallary";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: publicGallaryModuleComponent,
                children: []
            }
        ])
    ],
    declarations: [
        publicGallaryModuleComponent
    ]
})
export class publicGallaryModule {
}
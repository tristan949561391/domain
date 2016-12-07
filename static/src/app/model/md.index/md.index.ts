import {NgModule }       from '@angular/core';

import {CommonModule }   from '@angular/common';
import {IndexComponent} from "./cpt.index";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path:'',
                component: IndexComponent,
                children: [

                ]
            }
        ])
    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule {}
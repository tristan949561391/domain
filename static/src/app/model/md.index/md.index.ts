import {NgModule }       from '@angular/core';

import {IndexComponent} from "./cpt.index";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
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
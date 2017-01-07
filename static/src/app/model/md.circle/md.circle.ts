/**
 *
 *
 * Created by Tristan on 2016/12/10.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {RouterModule} from "@angular/router";
import {CircleComponent} from "./cpt.circle";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CircleComponent,
                children: []
            }, {
                path: '/:userid',
                component: CircleComponent,
                children: []
            }
        ])
    ],
    declarations: [
        CircleComponent
    ]
})
export class CircleModule {
}

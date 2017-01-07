/**
 * Created by Tristan on 2017/1/1.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {RouterModule} from "@angular/router";
import {RankingComponent} from "./cpt.ranking";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RankingComponent,
                children: []
            }
        ])
    ],
    declarations: [
        RankingComponent
    ]
})
export class RankingModule {
}

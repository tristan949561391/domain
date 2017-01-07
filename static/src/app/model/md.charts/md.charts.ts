/**
 * Created by Tristan on 2016/12/14.
 */
import {NgModule} from "@angular/core";
import {ChartsComponent} from "./cpt.charts";
import {RouterModule} from "@angular/router";
@NgModule({
    declarations: [
        ChartsComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ChartsComponent
            }
        ])
    ],
})
export class ChartsModule {
}
/**
 * Created by Tristan on 2016/12/13.
 */
import {Component, Input} from "@angular/core";
@Component({
    templateUrl: './template/findpass.html',
    styleUrls: [
        './template/findpass_globle.css'
    ],
    selector: 'cpt_findpass'
})
export class FindpassComponent {
    @Input()
    module:String
}
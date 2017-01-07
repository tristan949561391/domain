/**
 * Created by Tristan on 2016/12/13.
 */
import {Component, Input} from "@angular/core";
@Component({
    templateUrl: './template/register.html',
    styleUrls: [
        './template/register_globle.css'
    ],
    selector: 'cpt_register'
})
export class RegisterComponent {
    @Input()
    module:String
}
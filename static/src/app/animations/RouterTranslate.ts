import {trigger, transition, style, animate} from "@angular/core";
/**
 * Created by Tristan on 16/11/30.
 */

export class RouterTranslate {
    static FlyInAnimation = trigger('flyIn', [
        transition('void => *', [
            style({
                transform: ' translateX(-15px) translateY(20px)'
            }),
            animate('600ms', style({
                transform: ' translateX(0) translateY(0)'
            }))
        ])
    ])

}
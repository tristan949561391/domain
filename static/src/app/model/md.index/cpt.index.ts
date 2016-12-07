/**
 * Created by Tristan on 16/10/19.
 */
import {Component} from '@angular/core';
import any = jasmine.any;

declare let slider: any
@Component({
    templateUrl: './template/index.html',
    styleUrls: [
        './template/style.css'
    ]
})

export class IndexComponent {
    ngOnInit() {
        slider.init();
    }
}

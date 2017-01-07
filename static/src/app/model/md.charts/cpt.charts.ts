/**
 * Created by Tristan on 2016/12/14.
 */
import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    templateUrl: './template/charts.html',
    styleUrls: [
        './template/charts_globle.css'
    ]
})
export class ChartsComponent {
    private module: String

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.module = params['module'] || 'week';
        })
    }
}
/**
 * Created by Tristan on 16/10/2.
 */
import {Component, style, keyframes, animate, transition, state, trigger, Input} from '@angular/core';
import {LoginService} from '../../service/ser.login'
import {Router} from "@angular/router";
import {RouterTranslate} from "../../animations/RouterTranslate";
import {UserProfile} from "../../entity/UserProfile";

declare var $: any
@Component({
    selector: '.modelContent',
    templateUrl: 'template/login.html',
    styleUrls: ['template/login.css'],
    providers: [LoginService]
})
export class LoginComponent {
    @Input()
    modal

    ngOnInit() {
    }



    constructor(private router: Router, private loginService: LoginService) {
    }

    login(mobile, password) {
        this.loginService.login(mobile, password, (data) => {
            this.modal.close()
        }, (err) => {
            LoginService.isLogin=true
            LoginService.profile=new UserProfile('asdasd','Tristan','http://asdasdasd','18156114641','F')
            this.modal.hide()
        })
    }

}

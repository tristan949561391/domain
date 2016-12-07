import {Component, trigger, state, style, transition, animate} from '@angular/core';
import {LoginService} from "../../service/ser.login";
@Component({
    selector: 'app-root',
    templateUrl: 'template/app.navigation.html',
    styleUrls: ['template/app.navigation.css'],
    providers:[LoginService]
})

export class AppComponent {
    constructor( private loginService: LoginService){}
    ngOnInit(){
        this.loginService.getProfile()
    }

    checkLogin(){
        return LoginService.isLogin
    }
    getLoginProfile(){
        return LoginService.profile
    }

}

/**
 * Created by Tristan on 16/10/23.
 */
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {UserProfile} from "../entity/UserProfile";
const url = 'http://localhost:8080'

@Injectable()
export class LoginService {

    static isLogin: boolean = false;
    static profile: UserProfile

    constructor(private http: Http) {
    }

    login(username, password, callbackSuccess, callbackErr) {
        let loginUrl = url + '/passport/login'
        let timestamp = Date.now()
        this.http.post(loginUrl, {
            username: username,
            password: password,
            timestamp: timestamp
        })
            .map(res => res.json())
            .subscribe(data => {
                LoginService.isLogin = true
                callbackSuccess(data)
            }, error => callbackErr(error))
    }

    sendVcode(mobile, callbackSuccess, callbackErr) {
        var sendVcodeUrl = url + '/passport/sendvcode/' + mobile
        this.http.post(sendVcodeUrl, {})
            .subscribe(data => callbackSuccess(data), error => callbackErr(error))
    }

    register(mobile, vcode, password, callbackSuccess, callbackErr) {
        var registerUrl = url + "/passport/register"
        this.http.post(registerUrl, {
            mobile: mobile,
            vcode: vcode,
            password: password
        }).subscribe(data => callbackSuccess(data), error => callbackErr(error))
    }

    getProfile() {
        LoginService.isLogin = true;
        LoginService.profile = new UserProfile('asdasd', 'Tristan', '/img/demo/demo_head.jpeg', '18156114641', 'F')
    }
}

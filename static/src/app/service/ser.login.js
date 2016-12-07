"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Tristan on 16/10/23.
 */
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var url = 'http://localhost:8080';
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password, callbackSuccess, callbackErr) {
        var loginUrl = url + '/passport/login';
        var timestamp = Date.now();
        this.http.post(loginUrl, {
            username: username,
            password: password,
            timestamp: timestamp
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            LoginService.userInfo = data;
            callbackSuccess(data);
        }, function (error) { return callbackErr(error); });
    };
    LoginService.prototype.sendVcode = function (mobile, callbackSuccess, callbackErr) {
        var sendVcodeUrl = url + '/passport/sendvcode/' + mobile;
        this.http.post(sendVcodeUrl, {})
            .subscribe(function (data) { return callbackSuccess(data); }, function (error) { return callbackErr(error); });
    };
    LoginService.prototype.register = function (mobile, vcode, password, callbackSuccess, callbackErr) {
        var registerUrl = url + "/passport/register";
        this.http.post(registerUrl, {
            mobile: mobile,
            vcode: vcode,
            password: password
        }).subscribe(function (data) { return callbackSuccess(data); }, function (error) { return callbackErr(error); });
    };
    LoginService.userInfo = null;
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;

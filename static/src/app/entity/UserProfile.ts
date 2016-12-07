/**
 * Created by Tristan on 16/11/30.
 */
export class UserProfile {
    userId: String
    userName: String
    headIcon:String
    loginName: String
    gender: String
    constructor(userId,username,headIcon,loginName,gender){
        this.userId=userId;
        this.userName=username;
        this.headIcon=headIcon;
        this.loginName=loginName;
        this.gender=gender;
    }
}
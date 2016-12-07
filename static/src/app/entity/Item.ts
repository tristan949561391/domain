import {UserProfile} from "./UserProfile";
/**
 * Created by Tristan on 16/11/30.
 */
export class Item {
    user: UserProfile
    countComent: number
    countWatch: number
    countLike: number
    itemImgUrl: string

    constructor(user,countComent,countWatch,countLike,itemImgUrl){
        this.user=user;
        this.countComent=countComent;
        this.countWatch=countWatch;
        this.countLike=countLike;
        this.itemImgUrl=itemImgUrl;
    }
}
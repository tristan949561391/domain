/**
 * Created by Tristan on 2016/12/6.
 */
declare let $:any
export class PageOption {
    static scrollToTop(doc){
        $(doc).animate({scrollTop:0}, 'slow');
    }
}

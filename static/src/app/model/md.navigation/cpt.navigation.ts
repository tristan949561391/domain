import {Component, trigger, state, style, transition, animate} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: 'template/app.navigation.html',
    styleUrls: [
        'template/headnav.scss',
        'template/main.scss',
        'template/sidenav.css',
        'template/floatnav.css']
})
export class AppComponent {
    ngOnInit() {
    }
    fullscreen() {
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
    }
}

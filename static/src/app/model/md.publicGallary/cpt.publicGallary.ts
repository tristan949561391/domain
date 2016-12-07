/**
 * Created by Tristan on 16/10/19.
 */
import {Component} from '@angular/core';
import {UserProfile} from "../../entity/UserProfile";
import {Item} from "../../entity/Item";
import {PageOption} from "../../Util/PageOption";

@Component({
    templateUrl: './template/index.html',
    styleUrls: [
        './template/style.css',
        './template/floatMenu.css'
    ]
})

export class publicGallaryModuleComponent {
    u = new UserProfile('asdasd', 'Tristan', '/img/demo/demo_head.jpeg', '18156114641', 'F')
    items = [
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg'),
        new Item(this.u, 10, 20, 200, '/img/demo/demo_head.jpeg')
    ]
    loadingMore = false

    scoll(offsetHeight, scrollTop) {
        console.log(offsetHeight + ':' + scrollTop)
        if (offsetHeight - scrollTop <= 800 && this.loadingMore == false) {
            this.loadMore()
        }
    }

    loadMore() {
        if (this.loadingMore == false) {
            this.loadingMore = true
            setTimeout(() => {
                for (let i = 0; i < 30; i++) {
                    this.items[this.items.length] = new Item(this.u, 10, 20, 200, '/img/demo/demo_img.jpg')
                }
                this.loadingMore = false
            }, 1000)
        }

    }

    itemChooese(item) {
        alert(item)
    }

    toTop(doc) {
        PageOption.scrollToTop(doc)
    }
}

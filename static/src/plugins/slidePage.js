/**
 * Created by Tristan on 2016/12/6.
 */
var slider = function () {
    /* ==== private methods ==== */
    function getElementsByClass(object, tag, className) {
        var o = object.getElementsByTagName(tag);
        for (var i = 0, n = o.length, ret = []; i < n; i++) {
            if (o[i].className == className) ret.push(o[i]);
        }
        if (ret.length == 1) ret = ret[0];
        return ret;
    }

    /* ==== Slider Constructor ==== */
    function Slider(oCont, speed, iW, iH, oP) {
        this.slides = [];
        this.over = false;
        this.S = this.S0 = speed;
        this.iW = iW;
        this.iH = iH;
        this.oP = oP;
        this.oc = document.getElementById(oCont);
        this.frm = getElementsByClass(this.oc, 'div', 'slide');
        this.NF = this.frm.length;
        this.resize();
        for (var i = 0; i < this.NF; i++) {
            this.slides[i] = new Slide(this, i);
        }
        this.oc.parent = this;
        this.view = this.slides[0];
        this.Z = this.mx;
        /* ==== on mouse out event ==== */
        this.oc.onmouseout = function () {
            this.parent.mouseout();
            return false;
        }
    }

    Slider.prototype = {
        /* ==== animation loop ==== */
        run: function () {
            this.Z += this.over ? (this.mn - this.Z) * .5 : (this.mx - this.Z) * .5;
            this.view.calc();
            var i = this.NF;
            while (i--) this.slides[i].move();
        },
        /* ==== resize  ==== */
        resize: function () {
            this.wh = this.oc.clientWidth;
            this.ht = this.oc.clientHeight;
            this.wr = this.wh * this.iW;
            this.r = this.ht / this.wr;
            this.mx = this.wh / this.NF;
            this.mn = (this.wh * (1 - this.iW)) / (this.NF - 1);
        },
        /* ==== rest  ==== */
        mouseout: function () {
            this.over = false;
        }
    }
    /* ==== Slide Constructor ==== */
    Slide = function (parent, N) {
        this.parent = parent;
        this.N = N;
        this.x0 = this.x1 = N * parent.mx;
        this.v = 0;
        this.loaded = false;
        this.cpt = 0;
        this.start = new Date();
        this.obj = parent.frm[N];
        this.img = getElementsByClass(this.obj, 'img', 'diapo');
        if (N == 0) this.obj.style.borderLeft = 'none';
        this.obj.style.left = Math.floor(this.x0) + 'px';
        /* ==== mouse events ==== */
        this.obj.parent = this;
        this.obj.onmouseover = function () {
            this.parent.over();
            return false;
        }
    }
    Slide.prototype = {
        /* ==== target positions ==== */
        calc: function () {
            var that = this.parent;
            // left slides
            for (var i = 0; i <= this.N; i++) {
                that.slides[i].x1 = i * that.Z;
            }
            // right slides
            for (var i = this.N + 1; i < that.NF; i++) {
                that.slides[i].x1 = that.wh - (that.NF - i) * that.Z;
            }
        },
        /* ==== HTML animation : move slides ==== */
        move: function () {
            var that = this.parent;
            var s = (this.x1 - this.x0) / that.S;
            /* ==== lateral slide ==== */
            if (this.N && Math.abs(s) > .5) {
                this.obj.style.left = Math.floor(this.x0 += s) + 'px';
            }
            if (!this.loaded) {
                if (this.img.complete) {
                    this.img.style.visibility = 'visible';
                    this.loaded = true;
                }
            }
        },
        /* ==== light ==== */
        over: function () {
            this.parent.resize();
            this.parent.over = true;
            this.parent.view = this;
            this.start = new Date();
            this.cpt = 0;
            this.pro = false;
            this.calc();
        }
    }
    /* ==== public method - script initialization ==== */
    return {
        init: function () {
            // create instances of sliders here
            // parameters : HTMLcontainer name, speed (2 fast - 20 slow), Horizontal ratio, vertical text ratio, opacity
            this.s1 = new Slider("slider", 12, 1.84 / 3, 1 / 3.2, 70);
            setInterval("slider.s1.run();", 16);
        }
    }
}();
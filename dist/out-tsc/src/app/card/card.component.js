var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { CurImageService } from '../services/cur-image.service';
import { PopupStateService } from '../services/popup-state.service';
import { PaintServiceService } from '../services/paint-service.service';
var CardComponent = /** @class */ (function () {
    // @Output() singleImg: EventEmitter<string> = new EventEmitter<string>();
    function CardComponent(messageService, loginS, popS, imgS, paintS) {
        this.messageService = messageService;
        this.loginS = loginS;
        this.popS = popS;
        this.imgS = imgS;
        this.paintS = paintS;
        this.likeCount = 0;
        this.loginTrue = false;
        this.selCartList = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        console.log('List of images', this.imageList);
        this.updatedImg = false;
    };
    CardComponent.prototype.ngDoCheck = function () {
        console.log('card do change');
        // const logged = this.loginChk();
        // if ( logged === true ) {
        // // Add2Cart
        //   if (this.imageList.addedToCart === true) {
        //     this.cartAct = true;
        //   }
        // // like
        // if (this.imageList.liked === true) {
        //      this.likeFlag = true;
        //   }
        // } else {
        //   this.likeFlag = false;
        //   this.cartAct = false;
        // }
    };
    CardComponent.prototype.ngOnChanges = function () {
        console.log('card on change');
        var logged = this.loginChk();
        if (logged === true) {
            // Add2Cart
            if (this.imageList.addedToCart === true) {
                this.cartAct = true;
            }
            // like
            if (this.imageList.liked === true) {
                this.likeFlag = true;
            }
        }
        else {
            this.likeFlag = false;
            this.cartAct = false;
        }
    };
    CardComponent.prototype.cartSelected = function (sCart, ele) {
        var logged = this.loginChk();
        // tslint:disable-next-line:triple-equals
        if (logged === true) {
            this.cartAct = !this.cartAct;
            if (ele.className === 'cartRemove') {
                this.imageList.addedToCart = true;
                this.updateData(this.imageList);
                this.selCartList.push(sCart);
            }
            else if (ele.className === 'cartAdd') {
                this.imageList.addedToCart = false;
                this.updateData(this.imageList);
                this.selCartList.pop();
            }
            console.log(this.selCartList);
        }
        else {
            // this.cartAct = false;
            this.messageService.add({ key: 'cart', severity: 'warn',
                summary: 'Not yet logged in.', detail: 'Login Required.' });
        }
    };
    CardComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    CardComponent.prototype.likeClk = function (ee) {
        var logged = this.loginChk();
        // tslint:disable-next-line:triple-equals
        if (logged === true) {
            console.log(ee);
            this.likeFlag = !this.likeFlag;
            if (ee.target.className === 'unlike') {
                this.imageList.likeCount++;
                this.imageList.liked = true;
                this.updateData(this.imageList);
                return this.imageList.likeCount;
            }
            else {
                this.imageList.likeCount--;
                this.imageList.liked = false;
                this.updateData(this.imageList);
                return this.imageList.likeCount;
            }
        }
        else {
            // this.cartAct = false;
            this.messageService.add({ key: 'cart', severity: 'warn',
                summary: 'Not yet logged in.', detail: 'Login Required.' });
        }
    };
    CardComponent.prototype.updateData = function (imgList) {
        this.updatedImg = true;
        this.imgS.setCurImg(imgList);
    };
    CardComponent.prototype.loginChk = function () {
        var _this = this;
        this.loginS.loginSts.subscribe(function (res) { return _this.res = res; });
        if (this.res !== false) {
            this.resp = JSON.parse(this.res.split(',')[0]);
        }
        return this.resp;
    };
    CardComponent.prototype.imgClked = function () {
        var _this = this;
        this.popS.popSetState(true);
        this.popS.popGetState.subscribe(function (res) {
            _this.detailViewFlag = res;
            console.log('imgClk', res);
        });
        if (this.updatedImg === false) {
            console.log('imgClk-noupdate');
            this.imgS.setCurImg(this.imageList);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "imageList", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css'],
        }),
        __metadata("design:paramtypes", [MessageService,
            LoginService, PopupStateService,
            CurImageService, PaintServiceService])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map
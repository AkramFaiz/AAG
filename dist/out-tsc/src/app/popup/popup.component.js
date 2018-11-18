var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PopupStateService } from '../services/popup-state.service';
import { CurImageService } from '../services/cur-image.service';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
var PopupComponent = /** @class */ (function () {
    function PopupComponent(messageService, loginS, popS, imgS) {
        this.messageService = messageService;
        this.loginS = loginS;
        this.popS = popS;
        this.imgS = imgS;
        this.isVisibleMiddle = false;
        this.likeCount = 0;
        this.likeFlag = false;
        this.cartAct = false;
        this.selCartList = [];
        this.currCmt = '';
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgS.curImg.subscribe(function (res) { return _this.imageDetail = res; });
        console.log('clicked onint:', this.imageDetail);
        this.likeFlag = this.imageDetail.liked;
        this.cartAct = this.imageDetail.addedToCart;
        this.isVisibleMiddle = true;
    };
    // cart select/ Like select
    PopupComponent.prototype.cartSelected = function (sCart, ele) {
        var logged = this.loginChk();
        // tslint:disable-next-line:triple-equals
        if (logged === true) {
            this.cartAct = !this.cartAct;
            if (ele.className === 'cartRemove') {
                this.imageDetail.addedToCart = true;
                this.updateData(this.imageDetail);
                this.selCartList.push(sCart);
            }
            else if (ele.className === 'cartAdd') {
                this.imageDetail.addedToCart = false;
                this.updateData(this.imageDetail);
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
    PopupComponent.prototype.likeClk = function (ee) {
        var logged = this.loginChk();
        // tslint:disable-next-line:no-debugger
        debugger;
        // tslint:disable-next-line:triple-equals
        if (logged === true) {
            console.log(ee);
            this.likeFlag = !this.likeFlag;
            if (ee.className === 'unlike') {
                this.imageDetail.likeCount++;
                this.imageDetail.liked = true;
                this.updateData(this.imageDetail);
                return this.imageDetail.likeCount;
            }
            else {
                this.imageDetail.likeCount--;
                this.imageDetail.liked = false;
                this.updateData(this.imageDetail);
                return this.imageDetail.likeCount;
            }
        }
        else {
            // this.cartAct = false;
            this.messageService.add({ key: 'cart', severity: 'warn',
                summary: 'Not yet logged in.', detail: 'Login Required.' });
        }
    };
    PopupComponent.prototype.updateData = function (fnlImg) {
        this.imgS.setCurImg(fnlImg);
    };
    // popup ok / cancel
    PopupComponent.prototype.handleOkMiddle = function () {
        console.log('click ok');
        this.isVisibleMiddle = false;
        this.popS.popSetState(false);
    };
    PopupComponent.prototype.handleCancelMiddle = function () {
        console.log('click ok');
        this.isVisibleMiddle = false;
        this.popS.popSetState(false);
    };
    // comment
    PopupComponent.prototype.commentSubmit = function (cmt) {
        console.log(cmt);
        var logged = this.loginChk();
        if (logged === true) {
            if (cmt.value === '') {
                this.cmtClk = false;
                this.messageService.add({
                    key: 'comment',
                    severity: 'warn',
                    summary: 'Comments cannot be empty.',
                    detail: 'Comments cannot be empty.'
                });
            }
            else {
                this.cmtClk = true;
                this.currCmt = cmt.value;
            }
        }
        else {
            this.messageService.add({ key: 'cart', severity: 'warn',
                summary: 'Not yet logged in.', detail: 'Login Required.' });
        }
    };
    PopupComponent.prototype.deleteComment = function () {
        console.log('delCmt');
        this.currCmt = '';
    };
    PopupComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    // login in check
    PopupComponent.prototype.loginChk = function () {
        var _this = this;
        this.loginS.loginSts.subscribe(function (res) { return _this.res = res; });
        console.log('Login sts: ', this.res);
        if (this.res !== false) {
            this.resp = JSON.parse(this.res.split(',')[0]);
        }
        else {
            this.resp = false;
        }
        return this.resp;
    };
    PopupComponent = __decorate([
        Component({
            selector: 'app-popup',
            templateUrl: './popup.component.html',
            styleUrls: ['./popup.component.css']
        }),
        __metadata("design:paramtypes", [MessageService,
            LoginService,
            PopupStateService, CurImageService])
    ], PopupComponent);
    return PopupComponent;
}());
export { PopupComponent };
//# sourceMappingURL=popup.component.js.map
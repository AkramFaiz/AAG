var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
var HeadComponent = /** @class */ (function () {
    function HeadComponent(loginS, route) {
        this.loginS = loginS;
        this.route = route;
    }
    HeadComponent.prototype.ngOnInit = function () {
        // this.cartCount = this.cartCount ? this.cartCount : 0;
        // $(function() {
        //   $('#tagcloud a').tagcloud({
        //     size: {
        //       start: 20,
        //       end: 30,
        //       unit: 'px'
        //     },
        //     color: {
        //       start: '#1c5866',
        //       end: '#661c49'
        //     }
        //   });
        // });
    };
    HeadComponent.prototype.userClkRes = function (e) {
        this.visibleSidebar1 = false;
        if (e.type === 'login') {
            this.uName = e.username;
            this.logged = true;
            if (e.admin === true) {
                this.admin_role = true;
            }
            else {
                this.admin_role = false;
            }
        }
        else {
            this.logged = false;
        }
        this.lc.username = '';
        this.lc.password = '';
    };
    HeadComponent.prototype.logoutClk = function () {
        var _this = this;
        this.loginS.setLoginSts(false);
        this.loginS.loginSts.subscribe(function (res) { return _this.koi = res; });
        console.log(this.koi);
        this.uName = 'Username';
        this.logged = false;
        this.visibleSidebar2 = false;
        this.route.navigate(['/']);
    };
    __decorate([
        ViewChild(LoginComponent),
        __metadata("design:type", LoginComponent)
    ], HeadComponent.prototype, "lc", void 0);
    HeadComponent = __decorate([
        Component({
            selector: 'app-head',
            templateUrl: './head.component.html',
            styleUrls: ['./head.component.css']
        }),
        __metadata("design:paramtypes", [LoginService, Router])
    ], HeadComponent);
    return HeadComponent;
}());
export { HeadComponent };
//# sourceMappingURL=head.component.js.map
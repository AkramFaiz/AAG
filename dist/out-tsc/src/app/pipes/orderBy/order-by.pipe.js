var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, args) {
        console.log('value pipe:', value, args);
        return value.sort(function (a, b) {
            if (a[args.curKey] < b[args.curKey]) {
                return -1 * args.orderCode;
            }
            else if (a[args.curKey] > b[args.curKey]) {
                return 1 * args.orderCode;
            }
            else {
                return 0;
            }
        });
    };
    OrderByPipe = __decorate([
        Pipe({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());
export { OrderByPipe };
//# sourceMappingURL=order-by.pipe.js.map
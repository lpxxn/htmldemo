"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ad_directive_1 = require("./ad.directive");
var AdBannerComponent = (function () {
    function AdBannerComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.currentAddIndex = -1;
    }
    AdBannerComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
        this.getAds();
    };
    AdBannerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    AdBannerComponent.prototype.loadComponent = function () {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        var adItem = this.ads[this.currentAddIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = adItem.data;
    };
    AdBannerComponent.prototype.getAds = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.loadComponent();
        }, 3000);
    };
    return AdBannerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AdBannerComponent.prototype, "ads", void 0);
__decorate([
    core_1.ViewChild(ad_directive_1.AdDirective),
    __metadata("design:type", ad_directive_1.AdDirective)
], AdBannerComponent.prototype, "adHost", void 0);
AdBannerComponent = __decorate([
    core_1.Component({
        selector: 'add-banner',
        template: "\n              <div class=\"ad-banner\">\n                <h3>Advertisements</h3>\n                <ng-template ad-host></ng-template>\n              </div>\n            "
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], AdBannerComponent);
exports.AdBannerComponent = AdBannerComponent;
//# sourceMappingURL=ad-banner.component.js.map
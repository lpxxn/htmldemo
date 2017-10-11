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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var hero_job_ad_component_1 = require("./hero-job-ad.component");
var ad_banner_component_1 = require("./ad-banner.component");
var hero_profile_component_1 = require("./hero-profile.component");
var ad_directive_1 = require("./ad.directive");
var ad_service_1 = require("./ad.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [ad_service_1.AdService],
        declarations: [app_component_1.AppComponent,
            ad_banner_component_1.AdBannerComponent,
            hero_job_ad_component_1.HeroJobAdComponent,
            hero_profile_component_1.HeroProfileComponent,
            ad_directive_1.AdDirective],
        entryComponents: [hero_job_ad_component_1.HeroJobAdComponent, hero_profile_component_1.HeroProfileComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_job_ad_component_1 = require("./hero-job-ad.component");
var hero_profile_component_1 = require("./hero-profile.component");
var ad_item_1 = require("./ad-item");
var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.getAds = function () {
        return [
            new ad_item_1.AdItem(hero_profile_component_1.HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
            new ad_item_1.AdItem(hero_profile_component_1.HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
            new ad_item_1.AdItem(hero_job_ad_component_1.HeroJobAdComponent, { headline: 'Hiring for several positions',
                body: 'Submit your resume today!' }),
            new ad_item_1.AdItem(hero_job_ad_component_1.HeroJobAdComponent, { headline: 'Openings in all departments',
                body: 'Apply today' }),
        ];
    };
    return AdService;
}());
AdService = __decorate([
    core_1.Injectable()
], AdService);
exports.AdService = AdService;
//# sourceMappingURL=ad.service.js.map
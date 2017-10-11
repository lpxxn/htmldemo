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
var HeroProfileComponent = (function () {
    function HeroProfileComponent() {
    }
    return HeroProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeroProfileComponent.prototype, "data", void 0);
HeroProfileComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"hero-profile\">\n      <h3>Featured Hero Profile</h3>\n      <h4>{{data.name}}</h4>\n      \n      <p>{{data.bio}}</p>\n\n      <strong>Hire this hero today!</strong>\n    </div>\n  "
    })
], HeroProfileComponent);
exports.HeroProfileComponent = HeroProfileComponent;
//# sourceMappingURL=hero-profile.component.js.map
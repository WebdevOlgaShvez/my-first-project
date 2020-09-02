"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(us) {
        this.us = us;
        this.usersList = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.usersList = this.us.getUsersList();
    };
    UsersComponent.prototype.search = function (query) {
        this.usersList = this.us.findUser(query);
    };
    UsersComponent.prototype.sort = function (direction) {
        this.usersList = this.us.sortUsers(direction);
    };
    ;
    UsersComponent.prototype.addUser = function () {
        this.us.addUser({
            id: 1,
            name: this.name,
            username: this.username,
            email: "",
            role: this.role,
            phone: "",
            website: ""
        });
        this.usersList = this.us.getUsersList();
    };
    UsersComponent.prototype.selectItem = function (users) {
        var _this = this;
        this.selectedList = [];
        users.forEach(function (element) {
            _this.selectedList.push(element.value);
        });
    };
    UsersComponent.prototype.deleteUsers = function () {
        this.us.deleteUsers(this.selectedList);
        this.usersList = this.us.getUsersList();
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;

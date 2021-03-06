"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var UsersService = /** @class */ (function () {
    function UsersService() {
        this.usersList = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "role": "Admin",
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org"
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "role": "Admin",
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net"
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "role": "User",
                "phone": "1-463-123-4447",
                "website": "ramiro.info"
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
                "role": "User",
                "phone": "493-170-9623 x1567",
                "website": "kale.biz"
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca",
                "role": "User",
                "phone": "(254)954-1289",
                "website": "demarco.info"
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "username": "Leopoldo_Corkery",
                "email": "Karley_Dach@jasper.info",
                "role": "Admin",
                "phone": "1-477-935-8478 x6430",
                "website": "ola.org"
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "username": "Elwyn.Skiles",
                "email": "Telly.Hoeger@billy.biz",
                "role": "Admin",
                "phone": "210.067.6132",
                "website": "elvis.io"
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "username": "Maxime_Nienow",
                "email": "Sherwood@rosamond.me",
                "role": "User",
                "phone": "586.493.6943 x140",
                "website": "jacynthe.com"
            },
            {
                "id": 9,
                "name": "Glenna Reichert",
                "username": "Delphine",
                "email": "Chaim_McDermott@dana.io",
                "role": "User",
                "phone": "(775)976-6794 x41206",
                "website": "conrad.com"
            },
            {
                "id": 10,
                "name": "Clementina DuBuque",
                "username": "Moriah.Stanton",
                "email": "Rey.Padberg@karina.biz",
                "role": "User",
                "phone": "024-648-3804",
                "website": "ambrose.net"
            }
        ];
    }
    UsersService.prototype.getUsersList = function () {
        return this.usersList;
    };
    UsersService.prototype.findUser = function (query) {
        return this.usersList.filter(function (item) { return item.name.toLowerCase().includes(query.toLowerCase()); });
    };
    UsersService.prototype.sortUsers = function (val) {
        var direction = !!parseInt(val, 10) ? -1 : 1;
        return this.usersList.sort(function (a, b) { return direction * (a.name > b.name ? 1 : -1); });
    };
    UsersService.prototype.addUser = function (user) {
        this.usersList.unshift(user);
    };
    UsersService.prototype.deleteUsers = function (users) {
        var _this = this;
        users.forEach(function (user) {
            _this.usersList = _this.usersList.filter(function (item) { return item.id !== user.id; });
        });
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;

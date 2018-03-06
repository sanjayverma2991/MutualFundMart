webpackJsonp(["main"],{

/***/ "../../../../../client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../client/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n@import \"../../node_modules/bootstrap/scss/_variables.scss\";\r\n\r\n .pt-10 {\r\n    padding-top: ($spacer * 6) !important;\r\n  } */\r\n\r\n\r\n  .nbrand { \r\n    font-size: 25px;\r\n    font-weight: bold;\r\n  }\r\n\r\n\r\n  ul.nav-tabs > li {\r\n    width: 50%;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  ul.nav-tabs\r\n  {\r\n    background-color: rgba(255, 255, 255, 0.753)!important;\r\n  }\r\n  /* .form-control{\r\n    border-top:none;\r\n    border-left: none;\r\n    border-right: none;\r\n  } */\r\n\r\n.top-nav-collapse {\r\n    background-color: #78909c !important; \r\n}\r\n.navbar:not(.top-nav-collapse) {\r\n    background: transparent !important;\r\n}\r\n@media (max-width: 768px) {\r\n    .navbar:not(.top-nav-collapse) {\r\n        background: #4496be !important;\r\n    } \r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n    <nav class=\"navbar navbar-light navbar-expand-lg fixed-top text-dark scrolling-navbar\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand my-auto h1\" href=\"#\"  >\n                <i class=\"fab fa-mix fa-lg \" data-fa-transform=\"grow-2\"></i>\n                MutualFund Mart\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\" >\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link p-2\" [routerLink]=\"['/category']\" >\n                            <i class=\"fas fa-home\"></i>\n                            HOME\n                        </a>\n                    </li>&nbsp;\n\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link p-2 dropdown-toggle\" id=\"navbarDropdownCatgLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"  >\n                            <i class=\"fas fa-hashtag\"></i>\n                            CATEGORIES\n                        </a>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownCatgLink\">\n                            <div *ngIf=\"catgList && catgList.length\">\n                                <div *ngFor=\"let catg of catgList\">\n                                        <a class=\"dropdown-item\" [routerLink]=\"['/view', catg.catg_id]\"  >\n                                            {{catg.c_name | uppercase}}\n                                        </a>\n                                </div>\n                            </div>\n                            <div *ngIf=\"!catgList && !catgList.length\">\n                                    No category yet.\n                            </div>\n                        </div>\n                    </li>&nbsp;\n\n                    <!-- users -->\n                    <li class=\"nav-item\" *ngIf=\"_usersService.isPrivilegeUser()\">\n                        <a class=\"nav-link p-2\" [routerLink]=\"['/buyerdetails']\"  >\n                            <i class=\"fas fa-address-card\"></i>\n                            USERS\n                        </a>\n                    </li>&nbsp;\n\n                    <!-- purchase history -->\n                    <li class=\"nav-item\" *ngIf=\"_usersService.isPrivilegeUser()\">\n                        <a class=\"nav-link p-2\" [routerLink]=\"['/purchaseHistory']\"  >\n                            <i class=\"fas fa-history\"></i>\n                            PURCHASE HISTORY\n                        </a>\n                    </li>&nbsp;\n\n                    <!-- analysis -->\n                    <li class=\"nav-item\" *ngIf=\"_usersService.isPrivilegeUser()\">\n                        <a class=\"nav-link p-2\" [routerLink]=\"['/charts']\" >\n                            <i class=\"fas fa-chart-area\"></i>\n                            ANALYSIS\n                        </a>\n                    </li>&nbsp;\n\n                </ul>\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\" *ngIf=\"!auth\" id=\"lblLogin\"><a class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#LoginModal\" href=\"\">Login / SignUp</a></li>\n                    <li class=\"nav-item dropdown\" *ngIf=\"auth\">\n                        <a class=\"nav-link dropdown-toggle active\" id=\"navbarDropdownUserLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"  >\n                            <i class=\"fas fa-user-circle\"></i>\n                            {{f_name | uppercase}}\n                        </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownUserLink\">\n                            <a class=\"dropdown-item\" [routerLink]=\"['/profile', u_id]\">\n                                <i class=\"fas fa-angle-right\"></i>\n                                &nbsp;Profile\n                            </a>\n                            <a class=\"dropdown-item\" *ngIf=\"!privilege\" [routerLink]=\"['/purchaseHistory']\">\n                                <i class=\"fas fa-rupee-sign\"></i>\n                                &nbsp;MyPurchase\n                            </a>\n                            <a class=\"dropdown-item\" (click)=\"logout()\">\n                                <i class=\"fas fa-sign-out-alt\"></i>\n                                Logout\n                            </a>\n                        </div>\n                    </li>\n                </ul>  \n            </div>\n        </div> <!-- nav container fluid -->\n    </nav> <!-- navbar menubar -->\n    \n\n    <div class=\"modal fade\" id=\"LoginModal\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"LoginModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-md\" role=\"document\" style=\"top: 5%; margin: 0 auto;\">\n            <div class=\"modal-content\">\n                <!-- <div class=\"modal-header\"></div> -->\n                <div class=\"modal-body pb-0\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" >\n                        <li class=\"nav-item modal-title\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#login\" role=\"tab\" aria-controls=\"login\">Login</a>\n                        </li>\n                        <li class=\"nav-item modal-title\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#signup\" role=\"tab\" aria-controls=\"signup\">Sign UP</a>\n                        </li>\n                    </ul>\n                        \n                    <div class=\"container-fluid\" >\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"tab-content\"> <br>\n                                    <!-- login tab -->\n                                    <div class=\"tab-pane active\" id=\"login\" role=\"tabpanel\">\n                                        <div class=\"form-box\">\n                                            <div class=\"form-top\">\n                                                <div class=\"form-top-left\">\n                                                    <h3>Sign in first</h3>\n                                                    <p>Enter username and password to log in:</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-bottom\">\n                                                <form class=\"login-form\" role=\"form\" #loginRef=\"ngForm\" (ngSubmit)=\"onLogin(loginRef.value)\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"sr-only\" for=\"usernameL\">Username</label>\n                                                        <input type=\"text\" class=\"form-control\" name=\"usernameL\" id=\"usernameL\" placeholder=\"Email..\" [(ngModel)]=\"usernameL\" required email #usernameLRef=\"ngModel\">\n                                                        <div *ngIf=\"usernameLRef.invalid && (usernameLRef.dirty || usernameLRef.touched)\" class=\"alert alert-danger\">\n                                                            <div *ngIf=\"usernameLRef.errors.required\">\n                                                                *required\n                                                            </div>\n                                                            <div *ngIf=\"usernameLRef.errors.email\">\n                                                                Wrong username, should be an email-id.\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label class=\"sr-only\" for=\"passwordL\">Password</label>\n                                                        <input type=\"password\" class=\"form-control\" name=\"passwordL\" id=\"passwordL\" placeholder=\"Password..\" [(ngModel)]=\"passwordL\" required #passwordLRef=\"ngModel\">\n                                                        <div *ngIf=\"passwordLRef.invalid && (passwordLRef.dirty || passwordLRef.touched)\" class=\"alert alert-danger\">\n                                                            <div *ngIf=\"passwordLRef.errors.required\">\n                                                                *required\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"modal-footer\"style=\"border-top-color: white\">\n                                                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                                        <button type=\"submit\" id=\"btnsubmit\" class=\"btn btn-primary\" [disabled]=\"loginRef.invalid\">Sign in</button>\n                                                    </div>\n                                                </form>\n                                            </div>\n                                        </div>\n                                    </div> <!-- login tab -->\n\n                                    <!-- signup tab -->\n                                    <div class=\"tab-pane\" id=\"signup\" role=\"tabpanel\">\n                                        <div class=\"form-box\">\n                                            <div class=\"form-top\">\n                                                <div class=\"form-top-left\">\n                                                    <h3 class=\"mb-0\">Sign up</h3>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-bottom\">\n                                                <form class=\"registration-form\" role=\"form\" #signupRef=\"ngForm\" (ngSubmit)=\"onSignup(signupRef.value)\">\n                                                    <div class=\"form-row\">\n                                                        <div class=\"form-group col-md-6 mb-0\">\n                                                            <label class=\"sr-only\" for=\"f_nameSU\">First name</label>\n                                                            <input type=\"text\" class=\"form-control\" name=\"f_nameSU\" id=\"f_nameSU\" placeholder=\"First name..\" [(ngModel)]=\"f_nameSU\" required minlength=\"3\" #fnameRef=\"ngModel\">\n                                                            <div *ngIf=\"fnameRef.invalid && (fnameRef.dirty || fnameRef.touched)\" class=\"alert alert-danger\">\n                                                                <div *ngIf=\"fnameRef.errors.required\">\n                                                                        *required\n                                                                </div>\n                                                                <div *ngIf=\"fnameRef.errors.minlength\">\n                                                                        *minimum 3 char long\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group col-md-6 mb-0\">\n                                                            <label class=\"sr-only\" for=\"l_nameSU\">Last name</label>\n                                                            <input type=\"text\" class=\"form-control\" name=\"l_nameSU\" id=\"l_nameSU\" placeholder=\"Last name..\" [(ngModel)]=\"l_nameSU\" required minlength=\"3\" #lnameRef=\"ngModel\">\n                                                            <div *ngIf=\"lnameRef.invalid && (lnameRef.dirty || lnameRef.touched)\" class=\"alert alert-danger\">\n                                                                <div *ngIf=\"lnameRef.errors.required\">\n                                                                    *required\n                                                                </div>\n                                                                <div *ngIf=\"lnameRef.errors.minlength\">\n                                                                    *minimum 3 char long\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label class=\"sr-only\" for=\"email_idSU\">Email</label>\n                                                        <input type=\"email\" class=\"form-control\" name=\"email_idSU\" id=\"email_idSU\" placeholder=\"Email..\" [(ngModel)]=\"email_idSU\" required email #emailRef=\"ngModel\">\n                                                        <div *ngIf=\"emailRef.invalid && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\n                                                            <div *ngIf=\"emailRef.errors.required\">\n                                                                *required\n                                                            </div>\n                                                            <div *ngIf=\"emailRef.errors.email\">\n                                                                *wrong email-id\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-row\">\n                                                        <div class=\"form-group col-md-8 mb-0\">\n                                                            <label class=\"sr-only\" for=\"phoneSU\">Phone</label>\n                                                            <input type=\"text\" class=\"form-control\" name=\"phoneSU\" id=\"phoneSU\"  placeholder=\"Phone..\" [(ngModel)]=\"phoneSU\" required minlength=\"10\" maxlength=\"10\" #phoneSURef=\"ngModel\">\n                                                            <div *ngIf=\"phoneSURef.invalid && (phoneSURef.dirty || phoneSURef.touched)\" class=\"alert alert-danger\">\n                                                                <div *ngIf=\"phoneSURef.errors.required\">\n                                                                    *required\n                                                                </div>\n                                                                <div *ngIf=\"phoneSURef.errors.minlength\">\n                                                                    Phone number must be 10 digit.\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group col-md-4 mb-0\">\n                                                            <label class=\"sr-only\" for=\"genderSU\">Gender</label>\n                                                            <select class=\"form-control\" name=\"genderSU\" id=\"genderSU\" [(ngModel)]=\"genderSU\" required #genderSURef=\"ngModel\">\n                                                                <option disabled selected value>Select Gender</option>\n                                                                <option value=\"Male\">Male</option>\n                                                                <option value=\"Female\">Female</option>\n                                                            </select>\n                                                            <div *ngIf=\"genderSURef.invalid && (genderSURef.dirty || genderSURef.touched)\" class=\"alert alert-danger\">\n                                                                <div *ngIf=\"genderSURef.errors.required\">\n                                                                    *required\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label class=\"sr-only\" for=\"passwordSU\">Password</label>\n                                                        <input type=\"password\" class=\"form-control\" name=\"passwordSU\" id=\"passwordSU\" placeholder=\"Password..\" [(ngModel)]=\"passwordSU\" required minlength=\"8\" maxlength=\"12\" #passwdRef=\"ngModel\">\n                                                        <div *ngIf=\"passwdRef.invalid && (passwdRef.dirty || passwdRef.touched)\" class=\"alert alert-danger\">\n                                                            <div *ngIf=\"passwdRef.errors.required\">\n                                                                *required\n                                                            </div>\n                                                            <div *ngIf=\"passwdRef.errors.minlength\">\n                                                                Password is too short, must be 8 char long.\n                                                            </div>\n                                                            <div *ngIf=\"passwdRef.errors.max\">\n                                                                Password is too long, must be less than 12.\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label class=\"sr-only\" for=\"c_passwordSU\">Confirm password</label>\n                                                        <input type=\"password\" class=\"form-control\" name=\"c_passwordSU\" id=\"c_passwordSU\" placeholder=\"Confirm password..\" [(ngModel)]=\"c_passwordSU\" required #cpasswdRef=\"ngModel\" >\n                                                        <div *ngIf=\"cpasswdRef.invalid && (cpasswdRef.dirty || cpasswdRef.touched)\" class=\"alert alert-danger\">\n                                                            <div *ngIf=\"cpasswdRef.errors.required\">\n                                                                Re-type password and confirm.\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"alert alert-danger\" *ngIf=\"(passwordSU != c_passwordSU) && (passwordSU != '') && (c_passwordSU != '') && (cpasswdRef.dirty || cpasswdRef.touched)\">\n                                                            Password didnt match.\n                                                        </div>\n                                                        <div class=\"alert alert-success\" *ngIf=\"(passwordSU == c_passwordSU) && (passwordSU != '') && (c_passwordSU != '') && (cpasswdRef.dirty || cpasswdRef.touched)\">\n                                                            Password matched.\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"modal-footer pb-0\" style=\"border-top-color: white\">\n                                                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"signupRef.invalid\">Sign up</button>\n                                                    </div>\n                                                </form>\n                                            </div>\n                                        </div>\n                                    </div> <!-- signup tab -->\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <br>\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n       \n        \n    <div class=\"container-fluid m-0 px-0\">\n            <!-- <br/><br/><br/><br/> -->\n        <router-outlet></router-outlet>\n    </div>\n        \n    <hr class=\"featurette-divider\">\n    <footer class=\"container\">\n        <p>© 2018 Capstone Company, Inc.</p>\n    </footer>\n        \n</main>"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_usersService, _categoryService, _router, location) {
        this._usersService = _usersService;
        this._categoryService = _categoryService;
        this._router = _router;
        this.location = location;
        this.title = 'app';
        // for signup
        this.f_nameSU = "";
        this.l_nameSU = "";
        this.email_idSU = "";
        this.phoneSU = "";
        this.genderSU = "";
        this.passwordSU = "";
        this.c_passwordSU = "";
        // for login
        this.usernameL = "";
        this.passwordL = "";
        // navbar categories
        this.catgList = [];
        this.msg = "";
        this.uinfo = JSON.parse(localStorage.getItem('mf_uinfo'));
        this.f_name = this.uinfo.f_name;
        this.u_id = this.uinfo.user_id;
        this.auth = this.uinfo.auth;
        this.privilege = this.uinfo.privilege;
        //this.hideModal = false;
        this.getCategories();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ishome = location.pathname == '/' ? true : false;
        console.log(location.pathname);
    };
    AppComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (_categories) {
            _this.catgList = _categories;
        });
    };
    AppComponent.prototype.onSignup = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var newUser = {
            email_id: formValue.email_idSU,
            f_name: formValue.f_nameSU,
            l_name: formValue.l_nameSU,
            phone: formValue.phoneSU,
            gender: formValue.genderSU,
            passwd: formValue.passwordSU
        };
        this._usersService.addUser(newUser)
            .subscribe(function (_user) {
            console.log("user request entered in db");
            //this._router.navigate(['']);
            // for cookie
            _this.auth = true;
            _this.f_name = _user.f_name;
            _this.u_id = _user.user_id;
            _this.privilege = _user.privilege;
            var uc = {
                user_id: _user.user_id,
                email_id: _user.email_id,
                f_name: _user.f_name,
                l_name: _user.l_name,
                phone: _user.phone,
                loggedin: new Date(),
                auth: true,
                privilege: _user.privilege
            };
            localStorage.setItem('mf_uinfo', JSON.stringify(uc));
            location.reload();
        }, function (err) {
            console.log("user request creation error");
            //this._router.navigate(['']);
        });
    }; // signup
    AppComponent.prototype.onLogin = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        // let newUser = {
        //   email_id: formValue.usernameL,
        //   passwd: formValue.passwordL
        // };
        this._usersService.login(this.usernameL, this.passwordL)
            .subscribe(function (_result) {
            if (_result.failed) {
                _this.msg = "Login failed: " + _result.failed;
                console.log(_this.msg);
                //   this.snackBar.open(this.msg, "OK", {
                //    duration: 2000
                //  });
            }
            else if (_result.success) {
                _this.msg = "Login success, " + _result.f_name + "..!!";
                console.log(_this.msg);
                //  this.snackBar.open(this.msg, "OK", {
                //   duration: 2000
                //  });
                _this.auth = true;
                _this.f_name = _result.f_name;
                _this.u_id = _result.user_id;
                _this.privilege = _result.privilege;
                var uc = {
                    user_id: _result.user_id,
                    email_id: _result.email_id,
                    f_name: _result.f_name,
                    l_name: _result.l_name,
                    phone: _result.phone,
                    loggedin: new Date(),
                    auth: true,
                    privilege: _result.privilege
                };
                localStorage.setItem('mf_uinfo', JSON.stringify(uc));
                //this.hideModal = true;
                location.reload();
            }
        }, function (error) {
            _this.msg = "Login error, try again..!!";
            console.log(_this.msg);
            //  this.snackBar.open(this.msg, "OK", {
            //    duration: 2000
            //  });
        });
    };
    AppComponent.prototype.logout = function () {
        var uc = {
            user_id: "",
            email_id: "",
            f_name: "UNKNOWN",
            l_name: "",
            phone: "",
            loggedin: "",
            auth: false,
            privilege: false
        };
        localStorage.setItem('mf_uinfo', JSON.stringify(uc));
        this.auth = false;
        this.f_name = "UNKNOWN";
        this.u_id = "";
        this.privilege = false;
        //this._router.navigate(['']);
        location.reload();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../client/app/app.component.html"),
            styles: [__webpack_require__("../../../../../client/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../client/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__ = __webpack_require__("../../../../../client/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_categorydetails_form_component__ = __webpack_require__("../../../../../client/app/categories/categorydetails-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categories_categories_filter_pipe__ = __webpack_require__("../../../../../client/app/categories/categories-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__purchases_purchases_service__ = __webpack_require__("../../../../../client/app/purchases/purchases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_profile_form_component__ = __webpack_require__("../../../../../client/app/users/profile-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_buyerdetail_form_component__ = __webpack_require__("../../../../../client/app/users/buyerdetail-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__purchases_viewcart_form_component__ = __webpack_require__("../../../../../client/app/purchases/viewcart-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__purchases_purchasehistory_form_component__ = __webpack_require__("../../../../../client/app/purchases/purchasehistory-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__charts_bar_chart_demo__ = __webpack_require__("../../../../../client/app/charts/bar-chart-demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__homepage_HomePageFolder_what_are_the_various_types_of_funds__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__homepage_HomePageFolder_So_can_I_invest_now_for_my_vacation_8_months_later__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__homepage_HomePageFolder_Why_should_one_invest_in_Mutua_lFunds__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__homepage_HomePageFolder_can_mutual_funds_help_create_wealth__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__homepage_homepage_component__ = __webpack_require__("../../../../../client/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// angular material


// categories



// services



// users


// purchases


// chart


//Home





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_9__categories_categorydetails_form_component__["a" /* CategoryDetailFormComponent */], __WEBPACK_IMPORTED_MODULE_10__categories_categories_filter_pipe__["a" /* CategoryFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__users_profile_form_component__["a" /* ProfileFormComponent */], __WEBPACK_IMPORTED_MODULE_15__users_buyerdetail_form_component__["a" /* BuyerDeatilFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__purchases_viewcart_form_component__["a" /* ViewCartFormComponent */], __WEBPACK_IMPORTED_MODULE_17__purchases_purchasehistory_form_component__["a" /* PurchaseHistoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__charts_bar_chart_demo__["a" /* BarChartDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__homepage_HomePageFolder_what_are_the_various_types_of_funds__["a" /* whatarethevarioustypesoffunds */], __WEBPACK_IMPORTED_MODULE_21__homepage_HomePageFolder_So_can_I_invest_now_for_my_vacation_8_months_later__["a" /* SocanIinvestnowformyvacation8monthslater */],
                __WEBPACK_IMPORTED_MODULE_22__homepage_HomePageFolder_Why_should_one_invest_in_Mutua_lFunds__["a" /* WhyshouldoneinvestinMutualFunds */], __WEBPACK_IMPORTED_MODULE_23__homepage_HomePageFolder_can_mutual_funds_help_create_wealth__["a" /* canmutualfundshelpcreatewealth */], __WEBPACK_IMPORTED_MODULE_24__homepage_homepage_component__["a" /* HomepageComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__categories_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_11__users_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_13__purchases_purchases_service__["a" /* PurchasesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../client/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_categories_component__ = __webpack_require__("../../../../../client/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categorydetails_form_component__ = __webpack_require__("../../../../../client/app/categories/categorydetails-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_profile_form_component__ = __webpack_require__("../../../../../client/app/users/profile-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_buyerdetail_form_component__ = __webpack_require__("../../../../../client/app/users/buyerdetail-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchases_viewcart_form_component__ = __webpack_require__("../../../../../client/app/purchases/viewcart-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purchases_purchasehistory_form_component__ = __webpack_require__("../../../../../client/app/purchases/purchasehistory-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__ = __webpack_require__("../../../../../client/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_HomePageFolder_what_are_the_various_types_of_funds__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_HomePageFolder_So_can_I_invest_now_for_my_vacation_8_months_later__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_HomePageFolder_Why_should_one_invest_in_Mutua_lFunds__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homepage_HomePageFolder_can_mutual_funds_help_create_wealth__ = __webpack_require__("../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__charts_bar_chart_demo__ = __webpack_require__("../../../../../client/app/charts/bar-chart-demo.ts");

// categories


// user profile


// purchases


// home





// chart

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_1__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'view/:catg_id', component: __WEBPACK_IMPORTED_MODULE_2__categories_categorydetails_form_component__["a" /* CategoryDetailFormComponent */] },
    { path: 'profile/:user_id', component: __WEBPACK_IMPORTED_MODULE_3__users_profile_form_component__["a" /* ProfileFormComponent */] },
    { path: 'buyerdetails', component: __WEBPACK_IMPORTED_MODULE_4__users_buyerdetail_form_component__["a" /* BuyerDeatilFormComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_5__purchases_viewcart_form_component__["a" /* ViewCartFormComponent */] },
    { path: 'purchaseHistory', component: __WEBPACK_IMPORTED_MODULE_6__purchases_purchasehistory_form_component__["a" /* PurchaseHistoryFormComponent */] },
    { path: 'purchase', component: __WEBPACK_IMPORTED_MODULE_6__purchases_purchasehistory_form_component__["a" /* PurchaseHistoryFormComponent */] },
    { path: 'whatarethevarioustypesoffunds', component: __WEBPACK_IMPORTED_MODULE_8__homepage_HomePageFolder_what_are_the_various_types_of_funds__["a" /* whatarethevarioustypesoffunds */] },
    { path: 'SocanIinvestnowformyvacation8monthslater', component: __WEBPACK_IMPORTED_MODULE_9__homepage_HomePageFolder_So_can_I_invest_now_for_my_vacation_8_months_later__["a" /* SocanIinvestnowformyvacation8monthslater */] },
    { path: 'WhyshouldoneinvestinMutualFunds', component: __WEBPACK_IMPORTED_MODULE_10__homepage_HomePageFolder_Why_should_one_invest_in_Mutua_lFunds__["a" /* WhyshouldoneinvestinMutualFunds */] },
    { path: 'canmutualfundshelpcreatewealth', component: __WEBPACK_IMPORTED_MODULE_11__homepage_HomePageFolder_can_mutual_funds_help_create_wealth__["a" /* canmutualfundshelpcreatewealth */] },
    { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_12__charts_bar_chart_demo__["a" /* BarChartDemoComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../client/app/categories/categories-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryFilterPipe = (function () {
    function CategoryFilterPipe() {
    }
    CategoryFilterPipe.prototype.transform = function (value, args) {
        var filter = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(function (book) {
            return book.title.toLocaleLowerCase().startsWith(filter) != false;
        }) : value;
    };
    CategoryFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'categoryFilter' })
    ], CategoryFilterPipe);
    return CategoryFilterPipe;
}());



/***/ }),

/***/ "../../../../../client/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.btnRed{\r\n    color:red!important;\r\n}\r\n\r\n.btnOrange{\r\n    color:orange!important;\r\n}\r\n\r\n.btnGreen{\r\n    color:green!important;\r\n}\r\n\r\n.btnYellow{\r\n    color:yellow!important;\r\n}\r\n\r\n.btnSkyblue{\r\n    color:skyblue!important;\r\n}\r\n\r\n.btnBlack{\r\n    color:black!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/>\r\n<div class=\"text-center\" *ngIf='!categories.length'>\r\n    No Category yet. Please add one.\r\n</div>\r\n\r\n<div class=\"row\" *ngIf='categories && categories.length'>\r\n    <div class=\"card-group col-sm-3 mb-5\" *ngFor='let category of categories | categoryFilter: nameFilter'>\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top\" [src]=\"catgImgSrcPrefix + category.c_img + imgJPGExtension\" alt=\"category_image\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title cur-pointer\" [routerLink]=\"['/view', category.catg_id.toString()]\">{{ category.c_name | uppercase }}</h3>\r\n                <p class=\"card-text\">{{ category.c_description | slice:0:100 }}\r\n                    <a class=\"text-Link\" *ngIf=\"category.c_description.length > 100\" [routerLink]=\"['/view', category.catg_id.toString()]\"> ..more</a>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5 text-left\">\r\n                            <small class=\"text-muted\">Schemes: &nbsp;{{category.scheme.length}}</small>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-7 text-right\">\r\n                            <button type=\"button\" class=\"btn btn-link btn-sm p-0\" [routerLink]=\"['/view', category.catg_id.toString()]\">\r\n                                <i class=\"fas fa-eye fa-lg btnBlack\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>\r\n\r\n                            <button type=\"button\" class=\"btn btn-link btn-sm p-0\" *ngIf=\"_usersService.isPrivilegeUser() && !category.scheme.length\" (click)=\"deleteCategory(category.catg_id, category.c_name)\">\r\n                                <i class=\"fas fa-trash-alt fa-lg btnBlack\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- footer row -->\r\n            </div>\r\n            <!-- card footer-->\r\n        </div>\r\n    </div>\r\n    <!-- </div> -->\r\n</div>\r\n\r\n<br/>\r\n<br/>\r\n\r\n<!-- add category button -->\r\n<div class=\"fixed-bottom text-right m-3\" *ngIf=\"_usersService.isPrivilegeUser()\">\r\n    <button type=\"button\" class=\"btn btn-link p-0\" data-toggle=\"modal\" data-target=\"#addCatg\" (click)=\"dismissCatgModal(); catgAddRef.resetForm()\" >\r\n        <i class=\"fas fa-plus-circle fa-4x btnRed\"></i>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-link p-0\" [routerLink]=\"['/charts']\">\r\n            <i class=\"fas fa-chart-area fa-4x btnOrange\" data-fa-transform=\"shrink-5.0\" data-fa-mask=\"fas fa-circle\"></i>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-link p-0\" [routerLink]=\"['/purchaseHistory']\">\r\n            <i class=\"fas fa-history fa-4x btnRed\" data-fa-transform=\"shrink-5.0\" data-fa-mask=\"fas fa-circle\"></i>\r\n    </button>\r\n</div>\r\n\r\n<!-- modal for adding category -->\r\n<div class=\"modal fade\" id=\"addCatg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addCatgTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"addCatgTitle\">Add new category</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"dismissCatgModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <!-- add category modal header -->\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                    <form class=\"form-horizontal\" role=\"form\" #catgAddRef=\"ngForm\" (ngSubmit)=\"onAddCatg(catgAddRef.value); catgAddRef.resetForm()\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-8\">\r\n                                <label for=\"c_nameAM\">Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"c_nameAM\" name=\"c_nameAM\" [(ngModel)]=\"c_nameAM\" required minlength=\"3\" #cnameRef=\"ngModel\">\r\n                                <div *ngIf=\"cnameRef.invalid && (cnameRef.dirty || cnameRef.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"cnameRef.errors.required\">\r\n                                        *required\r\n                                    </div>\r\n                                    <div *ngIf=\"cnameRef.errors.minlength\">\r\n                                        *minimum 3 characters long\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"c_imgAM\">Choose image</label>\r\n                                <select class=\"form-control\" id=\"c_imgAM\" name=\"c_imgAM\" [(ngModel)]=\"c_imgAM\" #cImgRef=\"ngModel\">\r\n                                    <option *ngFor=\"let _color of img_colors\" [value]=\"_color\">\r\n                                        {{_color}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group form-group-lg\" >\r\n                            <label for=\"c_descriptionAM\">Description</label>\r\n                            <textarea class=\"form-control\" id=\"c_descriptionAM\" name=\"c_descriptionAM\" [(ngModel)]=\"c_descriptionAM\" required minlength=\"10\"\r\n                                rows=\"7\" #cdescriptionRef=\"ngModel\"></textarea>\r\n                            <div *ngIf=\"cdescriptionRef.invalid && (cdescriptionRef.dirty || cdescriptionRef.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"cdescriptionRef.errors.required\">\r\n                                    *required\r\n                                </div>\r\n                                <div *ngIf=\"cdescriptionRef.errors.minlength\">\r\n                                    *minimum 10 characters long\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    \r\n\r\n                        <!-- for footer -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 text-right\">\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-lg\" data-dismiss=\"modal\" (click)=\"dismissCatgModal(); catgAddRef.resetForm()\">Close</button>\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"catgAddRef.invalid\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- add catg modal body -->\r\n\r\n            <!-- <div class=\"modal-footer\">\r\n                <div class=\"container-fluid\">\r\n                    \r\n                </div>\r\n            </div> add category modal footer -->\r\n        </div>\r\n        <!-- add category modal content -->\r\n    </div>\r\n</div>\r\n<!-- modal for adding category -->"

/***/ }),

/***/ "../../../../../client/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Console } from '@angular/core/src/console';




var CategoriesComponent = (function () {
    function CategoriesComponent(_usersService, _categoryService, _router, _route, _location, _snackBar) {
        this._usersService = _usersService;
        this._categoryService = _categoryService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        console.log("Initializing all-categories-component constructor ...");
        this.categories = [];
        // image src variables
        this.catgImgSrcPrefix = "../../assets/images/category/";
        this.schImgSrcPrefix = "../../assets/images/scheme/";
        this.imgJPGExtension = ".jpg";
        this.img_colors = this._categoryService.img_colors;
        // category add modal
        this.resetAddCatgForm();
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        console.log("Initializing all-categories-component ngOnIt ...");
        this.getCategories();
        console.log(this.categories);
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (_categories) {
            _this.categories = _categories;
        });
    };
    CategoriesComponent.prototype.resetAddCatgForm = function () {
        this.c_nameAM = "";
        this.c_descriptionAM = "";
        this.c_imgAM = "";
    };
    CategoriesComponent.prototype.onAddCatg = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var newCategory = {
            c_name: formValue.c_nameAM,
            c_description: formValue.c_descriptionAM,
            c_img: formValue.c_imgAM
        };
        this._categoryService.addCategory(newCategory)
            .subscribe(function (_success) {
            console.log("category request entered in db");
            var msg = "New category: " + _success.name + " added.";
            _this._snackBar.open(msg, "SUCCESS..!!", {
                duration: 5000
            });
            //this.resetAddCatgForm();
            //formValue.reset();
        }, function (err) {
            console.log("category request creation error");
            var msg = "Category: " + formValue.c_nameAM + " not added. Please verify all fields.";
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
        });
    };
    CategoriesComponent.prototype.deleteCategory = function (id, name) {
        var _this = this;
        this._categoryService.deleteCategory(id)
            .subscribe(function (_categories) {
            console.log("category deleted in db");
            _this.categories = _categories;
            var msg = "Deleted category: " + name;
            _this._snackBar.open(msg, "SUCCESS..!!", {
                duration: 5000
            });
        }, function (err) {
            console.log("Category delete request error");
            var msg = "Delete error for category: " + name;
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
        });
    };
    CategoriesComponent.prototype.dismissCatgModal = function () {
        this.resetAddCatgForm();
        this.getCategories();
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../client/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../client/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatSnackBar */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../client/app/categories/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = (function () {
    // img_colors : string[] = ["HDFC","ICICI","SBI","AXIS","Equity"];
    function CategoriesService(_http) {
        this._http = _http;
        this.img_colors = ["DEBT", "EQUITY", "ETF", "FOF", "HYBRID", "LIQUID", "HDFC", "ICICI", "SBI", "AXIS"];
        this._categoryUrl = "https://mutual-fund-mart.herokuapp.com/api/categories/";
        console.log("Initializing Categories service ...");
    }
    CategoriesService.prototype.getCategories = function () {
        return this._http.get(this._categoryUrl)
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.getCategory = function (id) {
        return this._http.get(this._categoryUrl + id)
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.addCategory = function (newCategory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._categoryUrl + 'category_create', JSON.stringify(newCategory), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.addScheme = function (newScheme) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._categoryUrl + 'scheme_create', JSON.stringify(newScheme), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.updateCategory = function (updatedCategory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._categoryUrl + updatedCategory.catg_id, JSON.stringify(updatedCategory), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.updateScheme = function (updatedScheme) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._categoryUrl + "scheme_edit", JSON.stringify(updatedScheme), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.deleteCategory = function (catg_id) {
        return this._http.delete(this._categoryUrl + catg_id)
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.deleteScheme = function (delScheme) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._categoryUrl + "scheme_del", JSON.stringify(delScheme), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "../../../../../client/app/categories/categorydetails-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ul.demo {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n#button{\r\n    line-height: 12px;\r\n     width: 18px;\r\n     font-size: 8pt;\r\n     font-family: tahoma;\r\n     margin-top: 1px;\r\n     margin-right: 2px;\r\n     position:absolute;\r\n     top:0;\r\n     right:0;\r\n}\r\nul, ol {\r\n    list-style: none;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/categories/categorydetails-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div class=\"container-fluid\">\r\n    <h3>{{category.c_name}}</h3>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <!-- left image column -->\r\n        <div class=\"col-md-1\"></div>\r\n        <div class=\"col-md-3 text-center\">\r\n            <img [src]=\"catgImgSrcPrefix + category.c_img + imgJPGExtension\" class=\"avatar img-fluid\" alt=\"avatar\">\r\n        </div>\r\n\r\n        <!-- right form column -->\r\n        <div class=\"col-md-7 personal-info\">\r\n            <div class=\"alert alert-info alert-dismissable\" *ngIf=\"editAlert\">\r\n                <a class=\"panel-close close\" (click)=\"dismissAlert()\" data-dismiss=\"alert\">×</a>\r\n                {{msg}}\r\n            </div>\r\n\r\n            <form class=\"form-horizontal\" role=\"form\" #catgEditRef=\"ngForm\" (ngSubmit)=\"onSaveChangesCatg(catgEditRef.value)\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-6\">\r\n                        <!-- <h5>Category details:</h5> -->\r\n                    </div>\r\n                    <div class=\"col-md-6 text-right\" *ngIf=\"_usersService.isPrivilegeUser()\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"editClicked()\" *ngIf=\"!editMode\">\r\n                            Edit &nbsp;\r\n                            <i class=\"fas fa-pencil-alt\"></i>\r\n                        </button>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-success btn-md\" *ngIf=\"editMode\" [disabled]=\"catgEditRef.invalid\">\r\n                            Save Changes &nbsp;\r\n                            <i class=\"fas fa-save fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-md\" (click)=\"resetValues()\" *ngIf=\"editMode\">\r\n                            Cancel &nbsp;\r\n                            <i class=\"fas fa-times fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"form-row\" *ngIf=\"editMode\">\r\n                    <div class=\"form-group col-md-8\">\r\n                        <label class=\"control-label\" for=\"categorynameE\">Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"!editMode\" name=\"categorynameE\" id=\"categorynameE\" [(ngModel)]=\"category.c_name\"\r\n                            required minlength=\"3\" #categorynameRef=\"ngModel\">\r\n                        <div *ngIf=\"categorynameRef.invalid && (categorynameRef.dirty || categorynameRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"categorynameRef.errors.required\">\r\n                                *required\r\n                            </div>\r\n                            <div *ngIf=\"categorynameRef.errors.minlength\">\r\n                                *minimum 3 char long\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"c_imgE\">Choose image</label>\r\n                        <select class=\"form-control\" [disabled]=\"!editMode\" id=\"c_imgE\" name=\"c_imgE\" [(ngModel)]=\"category.c_img\" #cImgERef=\"ngModel\">\r\n                            <option *ngFor=\"let _color of img_colors\" [value]=\"_color\">\r\n                                {{_color}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\" *ngIf=\"editMode\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label class=\"control-label\" for=\"cateorydescriptionE\">Description</label>\r\n                        <textarea class=\"form-control\" [disabled]=\"!editMode\" name=\"cateorydescriptionE\" id=\"cateorydescriptionE\" [(ngModel)]=\"category.c_description\"\r\n                            required minlength=\"3\" rows=\"3\" #cateorydescriptionRef=\"ngModel\" style=\"height: max-content;\"> </textarea>\r\n                        <div *ngIf=\"cateorydescriptionRef.invalid && (cateorydescriptionRef.dirty || cateorydescriptionRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"cateorydescriptionRef.errors.required\">\r\n                                *required\r\n                            </div>\r\n                            <div *ngIf=\"cateorydescriptionRef.errors.minlength\">\r\n                                *minimum 3 char long\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"!editMode\">\r\n                    <div class=\"col-md-12\">\r\n                        <h5>Description</h5>\r\n                        <p>\r\n                            {{category.c_description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n        <!-- category info col-md-7 -->\r\n        <div class=\"col-md-1\"></div>\r\n    </div>\r\n    <!-- row for category details -->\r\n    <hr>\r\n    <br>\r\n\r\n    <!-- scheme card page -->\r\n    <div>\r\n        <h4>Schemes</h4>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"text-center\" *ngIf='!category.scheme.length'>\r\n            No schemes yet. Please add one.\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf='category.scheme && category.scheme.length'>\r\n            <div class=\"card-group col-sm-3 mb-5\" *ngFor='let scheme of category.scheme'>\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" [src]=\"schImgSrcPrefix + scheme.s_img + imgJPGExtension\" alt=\"scheme_image\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title cur-pointer\" data-toggle=\"modal\" data-target=\"#viewScheme\" (click)=\"viewSchemeData(scheme)\">{{scheme.s_name | uppercase}}</h5>\r\n                        <p class=\"card-text\">{{scheme.s_description | slice:0:100}}\r\n                            <a class=\"text-Link\" *ngIf=\"scheme.s_description.length > 100\" data-toggle=\"modal\" data-target=\"#viewScheme\" (click)=\"viewSchemeData(scheme)\">\r\n                                ..more</a>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-5 text-left\">\r\n                                    <small class=\"text-muted\">NAV: &nbsp;\r\n                                        <i class=\"fas fa-rupee-sign fs-xs\"></i> {{scheme.NAV}}</small>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-7 text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-link btn-sm\" *ngIf=\"_usersService.isAuthenticated() && !_usersService.isPrivilegeUser()  && inCart(scheme.scheme_id)\">\r\n                                        <i class=\"fas fa-check fa-lg btnGreen\" data-fa-transform=\"grow-2\"></i>\r\n                                    </button>\r\n\r\n                                    <button type=\"button\" class=\"btn btn-link btn-sm\" *ngIf=\"_usersService.isAuthenticated() && !_usersService.isPrivilegeUser() && !inCart(scheme.scheme_id)\"\r\n                                        (click)=\"addToCart(scheme, 'reqFromCard')\">\r\n                                        <i class=\"fas fa-cart-plus fa-lg btnSkyblue\" data-fa-transform=\"grow-2\"></i>\r\n                                    </button>\r\n\r\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\" data-toggle=\"modal\" data-target=\"#viewScheme\" (click)=\"viewSchemeData(scheme)\">\r\n                                        <i class=\"fas fa-eye fa-lg btnOrange\" data-fa-transform=\"grow-2\"></i>\r\n                                    </button>\r\n\r\n                                    <button type=\"button\" class=\"btn btn-link btn-sm p-0\" *ngIf=\"_usersService.isPrivilegeUser() && !scheme.sold\" (click)=\"deleteScheme(scheme.scheme_id, scheme.s_name, 'reqFromCard')\">\r\n                                        <i class=\"fas fa-trash-alt fa-lg btnRed\" data-fa-transform=\"grow-2\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <!-- footer row -->\r\n                        </div>\r\n                    </div>\r\n                    <!-- card footer-->\r\n\r\n                </div>\r\n                <!-- card -->\r\n            </div>\r\n            <!-- card-deck -->\r\n        </div>\r\n        <!-- row for scheme card -->\r\n    </div>\r\n</div>\r\n<!-- container-fluid -->\r\n\r\n<!-- modal for scheme view and update -->\r\n<div class=\"modal fade\" id=\"viewScheme\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewSchemeTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"viewSchemeTitle\">{{schemeViewModal.s_name}}</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"dismissSchemeModal(); schemeEditRef.resetForm()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <!-- scheme view modal header -->\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <!-- left image column -->\r\n                        <div class=\"col-md-3 text-center\">\r\n                            <img [src]=\"schImgSrcPrefix + schemeViewModal.s_img + imgJPGExtension\" class=\"avatar img-fluid\" alt=\"scheme_img\">\r\n                        </div>\r\n\r\n                        <!-- right form column -->\r\n                        <div class=\"col-md-9 personal-info\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"alert alert-info alert-dismissable\" *ngIf=\"schemeEditAlert\">\r\n                                        <a class=\"panel-close close\" (click)=\"dismissSchemeAlert()\" data-dismiss=\"alert\">×</a>\r\n                                        {{schemeMsg}}\r\n                                    </div>\r\n                                    <!-- scheme alert -->\r\n                                </div>\r\n                            </div>\r\n                            <!-- scheme alert row -->\r\n\r\n                            <form class=\"form-horizontal\" role=\"form\" #schemeEditRef=\"ngForm\" (ngSubmit)=\"onSaveChangesScheme(schemeEditRef.value, schemeViewModal.scheme_id)\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-left\">\r\n                                        <!-- <h5>Scheme details:</h5> -->\r\n                                    </div>\r\n                                    <div class=\"col-md-8 text-right\" *ngIf=\"_usersService.isPrivilegeUser()\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-md\" *ngIf=\"!schemeEditMode\" (click)=\"editSchemeClicked()\">\r\n                                            Edit &nbsp;\r\n                                            <i class=\"fas fa-pencil-alt\"></i>\r\n                                        </button>&nbsp;\r\n\r\n                                        <button type=\"submit\" class=\"btn btn-success btn-md\" *ngIf=\"schemeEditMode\" [disabled]=\"schemeEditRef.invalid\">\r\n                                            Save Changes &nbsp;\r\n                                            <i class=\"fas fa-save fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                                        </button>&nbsp;\r\n\r\n                                        <button type=\"button\" class=\"btn btn-warning btn-md\" *ngIf=\"schemeEditMode\" (click)=\"resetSchemeValues()\">\r\n                                            Cancel &nbsp;\r\n                                            <i class=\"fas fa-times fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- row for top buttons -->\r\n                                <br>\r\n\r\n                                <div class=\"row\" *ngIf=\"schemeEditMode\">\r\n                                    <div class=\"form-group col-md-12\">\r\n                                        <label class=\"control-label\" for=\"s_nameE\">Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" [disabled]=\"!schemeEditMode\" name=\"s_nameE\" id=\"s_nameE\" [(ngModel)]=\"schemeViewModal.s_name\"\r\n                                            required minlength=\"3\" #snameRef=\"ngModel\">\r\n                                        <div *ngIf=\"snameRef.invalid && (snameRef.dirty || snameRef.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"snameRef.errors.required\">\r\n                                                *required\r\n                                            </div>\r\n                                            <div *ngIf=\"snameRef.errors.minlength\">\r\n                                                *minimum 3 char long\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div> <!-- row for scheme name -->\r\n\r\n                                <div class=\"row\" *ngIf=\"schemeEditMode\">\r\n                                    <div class=\"form-group col-md-12\">\r\n                                        <label class=\"control-label\" for=\"s_descriptionE\">Description</label>\r\n                                        <textarea class=\"form-control\" [disabled]=\"!schemeEditMode\" name=\"s_descriptionE\" id=\"s_descriptionE\" [(ngModel)]=\"schemeViewModal.s_description\"\r\n                                            required minlength=\"3\" rows=\"3\" #sdescriptionRef=\"ngModel\" style=\"height: max-content\"></textarea>\r\n                                        <div *ngIf=\"sdescriptionRef.invalid && (sdescriptionRef.dirty || sdescriptionRef.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"sdescriptionRef.errors.required\">\r\n                                                *required\r\n                                            </div>\r\n                                            <div *ngIf=\"sdescriptionRef.errors.minlength\">\r\n                                                *minimum 3 char long\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"!schemeEditMode\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <h5>Description</h5>\r\n                                            <p>\r\n                                                {{schemeViewModal.s_description}}\r\n                                            </p>\r\n                                        </div>\r\n                                </div>\r\n                                \r\n\r\n                                <!-- row for scheme NAV and image -->\r\n                                <div class=\"row\" *ngIf=\"schemeEditMode\">\r\n                                        <div class=\"form-group col-md-7\">\r\n                                            <label class=\"control-label\" for=\"s_NAVE\">NAV</label>\r\n                                            <input type=\"text\" class=\"form-control\" [disabled]=\"!schemeEditMode\" name=\"s_NAVE\" id=\"s_NAVE\" [(ngModel)]=\"schemeViewModal.NAV\"\r\n                                                required #sNAVRef=\"ngModel\">\r\n                                            <div *ngIf=\"sNAVRef.invalid && (sNAVRef.dirty || sNAVRef.touched)\" class=\"alert alert-danger\">\r\n                                                <div *ngIf=\"sNAVRef.errors.required\">\r\n                                                    *required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                    \r\n                                        <div class=\"form-group col-md-5\">\r\n                                            <label for=\"s_imgE\">Choose image</label>\r\n                                            <select class=\"form-control\" [disabled]=\"!schemeEditMode\" id=\"s_imgE\" name=\"s_imgE\" [(ngModel)]=\"schemeViewModal.s_img\" #sImgRef=\"ngModel\">\r\n                                                <option *ngFor=\"let _color of img_colors\" [value]=\"_color\">\r\n                                                    {{_color}}\r\n                                                </option>\r\n                                            </select>\r\n                                        </div>\r\n                                </div>\r\n                                <!-- row for scheme description -->\r\n                                \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12 text-right\">\r\n                                        <p>\r\n                                            <a class=\"text-muted \">INCEPTION DATE: {{schemeViewModal.last_modified}} &nbsp;|&nbsp; SOLD: {{schemeViewModal.sold}}</a>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                            <!-- scheme view edit form -->\r\n                        </div>\r\n                        <!-- scheme view col-9 -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- scheme view modal body -->\r\n\r\n            <div class=\"modal-footer\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-left\">\r\n                            <a class=\"text-muted\">NAV: &nbsp;\r\n                                <i class=\"fas fa-rupee-sign fs-xs\"></i> {{schemeViewModal.NAV}}</a>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-8 text-right\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"dismissSchemeModal(); schemeEditRef.resetForm()\">\r\n                                Close &nbsp;\r\n                                <i class=\"fas fa-times fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>\r\n\r\n                            <button type=\"button\" class=\"btn btn-info\" *ngIf=\"_usersService.isAuthenticated() && !_usersService.isPrivilegeUser() && !schemeEditMode && !inCart(schemeViewModal.scheme_id)\"\r\n                                (click)=\"addToCart('', 'reqFromModal')\">\r\n                                Add to cart &nbsp;\r\n                                <i class=\"fas fa-cart-plus fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>&nbsp;\r\n\r\n                            <button type=\"button\" class=\"btn btn-success\" *ngIf=\"_usersService.isAuthenticated() && !_usersService.isPrivilegeUser() && !schemeEditMode && inCart(schemeViewModal.scheme_id)\"\r\n                                data-dismiss=\"modal\" [routerLink]=\"['/cart']\">\r\n                                Go to cart &nbsp;\r\n                                <i class=\"fab fa-opencart fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>&nbsp;\r\n\r\n                            <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"_usersService.isAuthenticated() && _usersService.isPrivilegeUser() && !schemeEditMode && !schemeViewModal.sold\"\r\n                                (click)=\"deleteScheme(schemeViewModal.scheme_id, schemeViewModal.s_name, 'reqFromModal')\">\r\n                                Delete &nbsp;\r\n                                <i class=\"fas fa-trash-alt fa-lg\" data-fa-transform=\"grow-2\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- scheme view modal footer -->\r\n        </div>\r\n        <!-- scheme view modal content -->\r\n    </div>\r\n</div>\r\n<!-- modal for scheme view and update -->\r\n\r\n<!-- add scheme button -->\r\n<div class=\"fixed-bottom text-right m-3\" *ngIf=\"_usersService.isPrivilegeUser()\">\r\n    <button type=\"button\" class=\"btn btn-link p-0\" data-toggle=\"modal\" data-target=\"#addScheme\" (click)=\"resetAddSchemeForm()\">\r\n        <i class=\"fas fa-plus-circle fa-4x btnRed\"></i>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-link p-0\"  [routerLink]=\"['/charts']\">\r\n            <i class=\"fas fa-chart-area fa-4x btnOrange\" data-fa-transform=\"shrink-5.0\" data-fa-mask=\"fas fa-circle\"></i>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-link p-0\" [routerLink]=\"['/purchaseHistory']\">\r\n            <i class=\"fas fa-history fa-4x btnRed\" data-fa-transform=\"shrink-5.0\" data-fa-mask=\"fas fa-circle\"></i>\r\n    </button>\r\n</div>\r\n\r\n<!-- purchase button -->\r\n<div class=\"fixed-bottom text-right m-3\" *ngIf=\"!_usersService.isPrivilegeUser() && _usersService.isAuthenticated()\">\r\n    <button type=\"button\" class=\"btn btn-link\" [routerLink]=\"['/cart']\">\r\n        <span class=\"fa-4x fa-layers fa-fw\">\r\n            <i class=\"fas fa-cart-arrow-down btnGreen\"></i>\r\n            <span class=\"fa-layers-counter\" style=\"background:grey\">{{cartContent}}</span>\r\n        </span>\r\n        <!-- <i class=\"fas fa-cart-arrow-down fa-5x btnOrange\" ></i> -->\r\n    </button>\r\n</div>\r\n\r\n<!-- modal for adding scheme -->\r\n<div class=\"modal fade\" id=\"addScheme\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addSchemeTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"addSchemeTitle\">Add new scheme</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"dismissSchemeModal(); schemeAddRef.resetForm()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <!-- add scheme modal header -->\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                    <form class=\"form-horizontal\" role=\"form\" #schemeAddRef=\"ngForm\" (ngSubmit)=\"onAddScheme(schemeAddRef.value); schemeAddRef.resetForm()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"s_nameAM\">Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"s_nameAM\" name=\"s_nameAM\" [(ngModel)]=\"s_nameAM\" required minlength=\"3\" #schemenameRef=\"ngModel\">\r\n                            <div *ngIf=\"schemenameRef.invalid && (schemenameRef.dirty || schemenameRef.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"schemenameRef.errors.required\">\r\n                                    *required\r\n                                </div>\r\n                                <div *ngIf=\"schemenameRef.errors.minlength\">\r\n                                    *minimum 3 characters long\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"s_descriptionAM\">Description</label>\r\n                            <textarea class=\"form-control\" id=\"s_descriptionAM\" name=\"s_descriptionAM\" [(ngModel)]=\"s_descriptionAM\" required minlength=\"10\"\r\n                                rows=\"7\" #schemedescriptionRef=\"ngModel\"></textarea>\r\n                            <div *ngIf=\"schemedescriptionRef.invalid && (schemedescriptionRef.dirty || schemedescriptionRef.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"schemedescriptionRef.errors.required\">\r\n                                    *required\r\n                                </div>\r\n                                <div *ngIf=\"schemedescriptionRef.errors.minlength\">\r\n                                    *minimum 10 characters long\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"NAVAM\">NAV</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"NAVAM\" name=\"NAVAM\" [(ngModel)]=\"NAVAM\" required #schemenavRef=\"ngModel\">\r\n                                <div *ngIf=\"schemenavRef.invalid && (schemenavRef.dirty || schemenavRef.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"schemenavRef.errors.required\">\r\n                                        *required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"s_imgAM\">Choose image</label>\r\n                                <select class=\"form-control\" id=\"s_imgAM\" name=\"s_imgAM\" [(ngModel)]=\"s_imgAM\" #schemeimgRef=\"ngModel\">\r\n                                    <option *ngFor=\"let _color of img_colors\" [value]=\"_color\">\r\n                                        {{_color}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <!-- for footer -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 text-right\">\r\n                                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"dismissSchemeModal(); schemeAddRef.resetForm()\">Close</button>\r\n                                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"schemeAddRef.invalid\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- add scheme modal body -->\r\n        </div>\r\n        <!-- add scheme modal content -->\r\n    </div>\r\n</div>\r\n<!-- modal for adding scheme -->"

/***/ }),

/***/ "../../../../../client/app/categories/categorydetails-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Console } from '@angular/core/src/console';




var CategoryDetailFormComponent = (function () {
    function CategoryDetailFormComponent(_usersService, _categoryService, _router, _route, _location, _snackBar) {
        var _this = this;
        this._usersService = _usersService;
        this._categoryService = _categoryService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        console.log("Initializing category details component constructor ...");
        // category edit
        this.editMode = false;
        this.editAlert = false;
        this.msg = "";
        // image src variables
        this.catgImgSrcPrefix = "../../assets/images/category/";
        this.schImgSrcPrefix = "../../assets/images/scheme/";
        this.imgJPGExtension = ".jpg";
        // category form
        this.catg_id = "";
        this.category = {};
        this.category.scheme = {};
        // scheme edit
        this.schemeEditMode = false;
        this.schemeEditAlert = false;
        this.schemeMsg = "";
        // scheme view modal
        this.schemeViewModal = {};
        // scheme add modal
        this.resetAddSchemeForm();
        this.img_colors = this._categoryService.img_colors;
        this._route.params.subscribe(function (params) {
            _this.catg_id = params['catg_id'];
            _this.getCategory(_this.catg_id);
        });
        // for cart
        this.cartContent = 0;
        this.userDetails = {};
        this.userDetails.cart = [];
        this.getUserDetails();
        this.cartTotalContent();
        console.log("Form Value = " + this.category);
    }
    CategoryDetailFormComponent.prototype.getCategory = function (catg_id) {
        var _this = this;
        this._categoryService.getCategory(catg_id)
            .subscribe(function (_category) {
            _this.category = _category;
        });
    };
    CategoryDetailFormComponent.prototype.getUserDetails = function () {
        var _this = this;
        var _u = this._usersService.getUserInfo();
        if (!_u) {
            var msg = "You are not logged in";
            console.log(msg);
            // this._snackBar.open(msg, "", {
            //         duration: 5000
            // });
        }
        else {
            // get user info
            this._usersService.getUser(_u.user_id)
                .subscribe(function (_user) {
                _this.userDetails = _user;
                _this.cartTotalContent();
            });
        }
    };
    CategoryDetailFormComponent.prototype.editClicked = function () {
        this.editMode = true;
        this.msg = "";
        this.editAlert = false;
    };
    CategoryDetailFormComponent.prototype.editSchemeClicked = function () {
        this.schemeEditMode = true;
        this.schemeMsg = "";
        this.schemeEditAlert = false;
    };
    CategoryDetailFormComponent.prototype.viewSchemeData = function (scheme) {
        this.schemeViewModal = scheme;
        // this.s_nameVM = scheme.s_name;
        // this.s_descriptionVM = scheme.s_description;
        // this.NAVVM = scheme.NAV;
        // this.soldVM = scheme.sold;
        // this.last_modifiedVM = scheme.last_modified;
        // this.s_imgVM = scheme.s_img;
    };
    CategoryDetailFormComponent.prototype.resetValues = function () {
        var _this = this;
        this._categoryService.getCategory(this.catg_id)
            .subscribe(function (_category) {
            _this.category = _category;
        });
        this.editMode = false;
        this.editAlert = false;
    };
    CategoryDetailFormComponent.prototype.resetSchemeValues = function () {
        // this._categoryService.getCategory(this.catg_id)
        //       .subscribe(_category => {
        //         this.category = _category;
        // });
        this.schemeEditMode = false;
        this.schemeEditAlert = false;
    };
    CategoryDetailFormComponent.prototype.resetAddSchemeForm = function () {
        this.scheme_idAM = "";
        this.s_nameAM = "";
        this.s_descriptionAM = "";
        this.NAVAM = "";
        this.soldAM = "";
        this.last_modifiedAM = "";
    };
    // resetViewSchemeForm()
    // {
    //   this.scheme_idVM = "";
    //   this.s_nameVM = "";
    //   this.s_descriptionVM = "";
    //   this.NAVVM = "";
    //   this.soldVM = "";
    //   this.last_modifiedVM = "";
    //   this.s_imgVM = "";
    // }
    CategoryDetailFormComponent.prototype.dismissAlert = function () {
        this.msg = "";
        this.editAlert = false;
    };
    CategoryDetailFormComponent.prototype.dismissSchemeAlert = function () {
        this.schemeMsg = "";
        this.schemeEditAlert = false;
    };
    CategoryDetailFormComponent.prototype.dismissSchemeModal = function () {
        this.resetAddSchemeForm();
        this.schemeViewModal = {};
        this.getCategory(this.catg_id);
    };
    CategoryDetailFormComponent.prototype.onSaveChangesCatg = function (formValue) {
        var _this = this;
        var updatedCategory = {
            catg_id: this.catg_id,
            c_name: formValue.categorynameE,
            c_description: formValue.cateorydescriptionE,
            c_img: formValue.c_imgE
        };
        this._categoryService.updateCategory(updatedCategory)
            .subscribe(function (_success) {
            console.log("category request updated in db");
            _this.editAlert = true;
            _this.msg = "Updated " + _success.name;
            _this.editMode = false;
            //this._router.navigate(['']);
        }, function (err) {
            console.log("category request updated error");
            _this.editAlert = true;
            _this.msg = "Not modified. Error occured, verify the field values.";
            //this.msg = err.error +" "+ err.msg;
            //this._router.navigate(['']);
        });
    };
    CategoryDetailFormComponent.prototype.onSaveChangesScheme = function (formValue, scheme_idE) {
        var _this = this;
        var updatedScheme = {
            catg_id: this.catg_id,
            scheme_id: scheme_idE,
            s_name: formValue.s_nameE,
            s_description: formValue.s_descriptionE,
            NAV: formValue.s_NAVE,
            s_img: formValue.s_imgE
        };
        this._categoryService.updateScheme(updatedScheme)
            .subscribe(function (_success) {
            console.log("scheme request updated in db");
            _this.schemeEditAlert = true;
            _this.schemeMsg = "Updated " + _success.name;
            _this.schemeEditMode = false;
            //this._router.navigate(['']);
        }, function (err) {
            console.log("category request updated error");
            _this.schemeEditAlert = true;
            _this.schemeMsg = "Not modified. Error occured, verify the field values.";
            //this.msg = err.error +" "+ err.msg;
            //this._router.navigate(['']);
        });
    };
    CategoryDetailFormComponent.prototype.onAddScheme = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var newScheme = {
            catg_id: this.catg_id,
            s_name: formValue.s_nameAM,
            s_description: formValue.s_descriptionAM,
            s_img: formValue.s_imgAM,
            NAV: formValue.NAVAM
        };
        this._categoryService.addScheme(newScheme)
            .subscribe(function (_success) {
            console.log("scheme request entered in db");
            var msg = "New scheme: " + _success.name + " added.";
            _this._snackBar.open(msg, "SUCCESS..!!", {
                duration: 5000
            });
            _this.resetAddSchemeForm();
            //this._router.navigate(['']);
        }, function (err) {
            console.log("scheme request creation error");
            var msg = "Scheme: " + formValue.s_nameAM + " not added. Please verify all fields.";
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
            //this._router.navigate(['']);
        });
    };
    CategoryDetailFormComponent.prototype.deleteScheme = function (id, name, reqFrom) {
        var _this = this;
        var delScheme = {
            catg_id: this.catg_id,
            scheme_id: id,
            s_name: name
        };
        this._categoryService.deleteScheme(delScheme)
            .subscribe(function (_success) {
            console.log("scheme deleted in db");
            // this.editAlert = true;
            // this.msg = "Updated "+ _success.name;
            // this.editMode = false;
            //this._router.navigate(['']);
            var msg = "Deleted scheme: " + name + " from category: " + _this.category.c_name;
            _this._snackBar.open(msg, "SUCCESS..!!", {
                duration: 5000
            });
            if (reqFrom == 'reqFromCard') {
                // get new category values
                _this._categoryService.getCategory(_this.catg_id)
                    .subscribe(function (_category) {
                    _this.category = _category;
                });
            }
            else if (reqFrom == 'reqFromModal') {
                location.reload();
            }
        }, function (err) {
            console.log("scheme delete request error");
            var msg = "Delete error for scheme: " + name;
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
        });
    };
    CategoryDetailFormComponent.prototype.addToCart = function (scheme, reqFrom) {
        var _this = this;
        var user = this._usersService.getUserInfo();
        this.cartContent++;
        if (!user) {
            var msg = "You are not logged in";
            console.log(msg);
            this._snackBar.open(msg, "", {
                duration: 5000
            });
        }
        else {
            if (reqFrom == 'reqFromModal') {
                scheme = this.schemeViewModal;
            }
            var addSchemeToCart = {
                user_id: user.user_id,
                c_id: this.category.catg_id,
                c_name: this.category.c_name,
                s_id: scheme.scheme_id,
                s_name: scheme.s_name,
                s_img: scheme.s_img,
                NAV: scheme.NAV
            };
            this._usersService.addToCart(addSchemeToCart)
                .subscribe(function (_success) {
                var msg = "Added to cart: " + scheme.s_name;
                console.log(msg);
                _this._snackBar.open(msg, "BUY NOW", {
                    duration: 5000
                });
                _this.getCategory(_this.catg_id);
                _this.getUserDetails();
            }, function (err) {
                var msg = "Scheme not added to cart: " + scheme.s_name;
                console.log(msg);
                _this.cartContent--;
                _this._snackBar.open(msg, "Try again..!!", {
                    duration: 5000
                });
            });
        }
    };
    CategoryDetailFormComponent.prototype.cartTotalContent = function () {
        var _this = this;
        if (this.userDetails) {
            this.cartContent = 0;
            this.userDetails.cart.forEach(function (_scheme) {
                _this.cartContent += _scheme.qty;
            });
        }
        else {
            console.log("No user info");
        }
    };
    CategoryDetailFormComponent.prototype.inCart = function (s_id) {
        var ret;
        ret = false;
        this.userDetails.cart.forEach(function (_scheme) {
            if (_scheme.s_id == s_id) {
                //console.log("sid matched: "+s_id)
                ret = true;
            }
        });
        return ret;
    };
    CategoryDetailFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../client/app/categories/categorydetails-form.component.html"),
            styles: [__webpack_require__("../../../../../client/app/categories/categorydetails-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatSnackBar */]])
    ], CategoryDetailFormComponent);
    return CategoryDetailFormComponent;
}()); // CategoryDetailFormComponent



/***/ }),

/***/ "../../../../../client/app/charts/bar-chart-demo.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div class=\"container\">\n  <!-- <div class=\"row\"> -->\n    <div class=\"card-group\">\n      <div class=\"card mr-3\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <h3 class=\"card-title\">Top Investors</h3>\n            </div>\n            <div class=\"col-sm-6\">\n              <select class=\"form-control\" id=\"userChartID\" name=\"userChartID\" (change)=\"showUserChart()\" [(ngModel)]=\"userChart\">\n                <option value=\"net_funds\">Funds</option>\n                <option value=\"net_amount\">Amounts</option>\n              </select>\n            </div>\n          </div>\n          <!-- for header -->\n          <div style=\"display: block\" *ngIf=\"userChartReady && (userChart == 'net_funds')\">\n            <canvas baseChart width=\"300\" height=\"200\" \n                    [datasets]=\"userFundBarData\" \n                    [labels]=\"userBarNetFundLabels\" \n                    [options]=\"userBarOptions\"\n                    [legend]=\"userBarLegend\" \n                    [chartType]=\"userBarType\" \n                    (chartHover)=\"chartHovered($event)\" \n                    (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n          <div style=\"display: block\" *ngIf=\"userChartReady && (userChart == 'net_amount')\">\n            <canvas baseChart width=\"300\" height=\"200\" \n                    [datasets]=\"userAmountBarData\" \n                    [labels]=\"userBarNetAmountLabels\" \n                    [options]=\"userBarOptions\"\n                    [legend]=\"userBarLegend\" \n                    [chartType]=\"userBarType\" \n                    (chartHover)=\"chartHovered($event)\" \n                    (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n        </div>\n      </div>\n      <!-- user chart -->\n\n      <!-- category chart -->\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <h4 class=\"card-title\">Top Funds from Categories</h4>\n            </div>\n            <div class=\"col-sm-6\">\n              <select class=\"form-control\" id=\"catgChartID\" name=\"catgChartID\" (change)=\"populateCatgGraph()\" [(ngModel)]=\"catgChart\">\n                <option *ngFor=\"let _catg of categories\" [value]=\"_catg.catg_id\">\n                  {{_catg.c_name}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <!-- for header -->\n          <div style=\"display: block\" *ngIf=\"catgChartReady && (catgPieLabels[0] != 'No funds are sold')\">\n            <canvas baseChart width=\"300\" height=\"200\" \n                    [datasets]=\"catgPieData\" \n                    [labels]=\"catgPieLabels\" \n                    [chartType]=\"catgPieType\" \n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n          <div *ngIf=\"catgPieLabels[0] == 'No funds are sold'\">\n            <br> <br>\n            <p class=\"text-muted text-center\">No funds are sold yet</p>\n          </div>\n        </div>\n      </div>\n      <!-- category chart -->\n    </div>\n    <div class=\"card col-xl-12 mt-3\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <h3 class=\"card-title\">Top Funds</h3>\n          </div>\n          <div class=\"col-sm-6\">\n            <select class=\"form-control\" id=\"fundChartID\" name=\"fundChartID\" (change)=\"populateFundGraph()\" [(ngModel)]=\"fundChart\">\n              <option value=\"sold\">Sold</option>\n              <option value=\"NAV\">NAV</option>\n            </select>\n          </div>\n        </div>\n        <!-- for header -->\n        <div style=\"display: block\" *ngIf=\"fundChartReady && (fundLineLabels[0] != 'No funds are sold')\">\n          <canvas baseChart width=\"300\" height=\"150\" \n                  [datasets]=\"fundLineData\"\n                  [labels]=\"fundLineLabels\"\n                  [options]=\"fundLineOptions\"\n                  [colors]=\"fundLineColors\"\n                  [legend]=\"fundLineLegend\"\n                  [chartType]=\"fundLineType\"\n                  (chartHover)=\"chartHovered($event)\"\n                  (chartClick)=\"chartClicked($event)\">\n          </canvas>\n        </div>\n        <div *ngIf=\"catgPieLabels[0] == 'No funds are sold/NAV'\">\n          <br> <br>\n          <p class=\"text-muted text-center\">No funds are sold yet</p>\n        </div>\n      </div>\n    </div>\n  <!-- </div> -->\n</div>"

/***/ }),

/***/ "../../../../../client/app/charts/bar-chart-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchases_purchases_service__ = __webpack_require__("../../../../../client/app/purchases/purchases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BarChartDemoComponent = (function () {
    ///////////////////////////////////////////////////////////////
    function BarChartDemoComponent(_userService, _categoryService, _purchaseService, _router, _route, _location, _snackBar) {
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._purchaseService = _purchaseService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        // user bar graph
        this.userBarOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.userBarType = 'bar';
        this.userBarLegend = true;
        this.catgPieType = 'doughnut';
        this.fundLineOptions = {
            responsive: true
        };
        this.fundLineColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
        ];
        this.fundLineLegend = true;
        this.fundLineType = 'line';
        console.log("Initializing chart component constructor ...");
        this.users = [];
        this.userChart = "";
        this.userChartReady = false;
        this.userFundBarData = [];
        this.userBarNetFundLabels = [];
        this.userNetFundData = [];
        this.userAmountBarData = [];
        this.userBarNetAmountLabels = [];
        this.userNetAmountData = [];
        // categories pie chart
        this.categories = [];
        this.schemes = [];
        this.catgChartReady = false;
        this.catgChart = "";
        this.catgPieLabels = [];
        this.catgPieData = [];
        // fund line chart
        this.funds = [];
        this.fundChartReady = false;
        this.fundChart = "sold";
        this.fundLineLabels = [];
        this.fundLineData = [];
        // auth guard
        if (!this._userService.isAuthenticated()) {
            // not authenticated
            // display error message
            var msg = "Please login first";
            console.log(msg);
            this._snackBar.open(msg, "Authentication required..!!", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        // get users info
        this.getAllUsers();
        // get categories info
        this.getAllCategories();
    }
    BarChartDemoComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (_users) {
            _this.users = _users;
            // this.populateUserNetAmountGraph();
            // this.populateUserNetFundGraph();
            _this.userChart = "net_funds";
            _this.showUserChart();
            _this.userChartReady = true;
        });
    };
    BarChartDemoComponent.prototype.populateUserNetFundGraph = function () {
        this.users.sort(function (a, b) {
            return parseFloat(a.net_funds) - parseFloat(b.net_funds);
        });
        // reset all data
        this.userFundBarData = [];
        this.userBarNetFundLabels = [];
        this.userNetFundData = [];
        var purchasedFlag = false;
        for (var count = 0; count < this.users.length && count < 10; count++) {
            if (this.users[count].net_funds) {
                purchasedFlag = true;
                this.userNetFundData.push(this.users[count].net_funds);
                this.userBarNetFundLabels.push(this.users[count].name.f_name);
            }
        }
        if (purchasedFlag) {
            this.userFundBarData = [
                { data: this.userNetFundData, label: "FUND" }
            ];
        }
        else {
            this.userFundBarData = [
                { data: [0], label: "No investors yet" }
            ];
        }
    };
    BarChartDemoComponent.prototype.populateUserNetAmountGraph = function () {
        this.users.sort(function (a, b) {
            return parseFloat(a.net_amount) - parseFloat(b.net_amount);
        });
        // reset data
        this.userAmountBarData = [];
        this.userBarNetAmountLabels = [];
        this.userNetAmountData = [];
        var purchasedFlag = false;
        for (var count = 0; count < this.users.length && count < 10; count++) {
            if (this.users[count].net_amount) {
                purchasedFlag = true;
                this.userNetAmountData.push(this.users[count].net_amount);
                this.userBarNetAmountLabels.push(this.users[count].name.f_name);
            }
        }
        if (purchasedFlag) {
            this.userAmountBarData = [
                { data: this.userNetAmountData, label: "AMOUNT" }
            ];
        }
        else {
            this.userAmountBarData = [
                { data: [0], label: "No investors yet" }
            ];
        }
    };
    BarChartDemoComponent.prototype.showUserChart = function () {
        if (this.userChart == "net_funds")
            this.populateUserNetFundGraph();
        else
            this.populateUserNetAmountGraph();
    };
    /////////////////////////////////////////////////////////////////////////////
    // events
    BarChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BarChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    /////////////////////////////////////////////////////////////////////////
    BarChartDemoComponent.prototype.getAllCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (_categories) {
            _this.categories = _categories;
            _this.catgChart = _this.categories[0].catg_id;
            _this.populateCatgGraph();
            _this.populateFundGraph();
            _this.catgChartReady = true;
            _this.fundChartReady = true;
        });
    };
    BarChartDemoComponent.prototype.populateCatgGraph = function () {
        //this.schemes = [];
        //console.log("catgchart: "+ this.catgChart)
        var _this = this;
        if (this.catgChart) {
            this.categories.forEach(function (_catg) {
                if (_catg.catg_id == _this.catgChart)
                    _this.schemes = _catg.scheme;
            });
        }
        else {
            console.log("Undefined catg chart");
        }
        if (this.schemes.length) {
            this.schemes.sort(function (a, b) {
                return parseFloat(a.sold) - parseFloat(b.sold);
            });
        }
        else {
            console.log("No schemes yet from category chart");
        }
        //this.catgPieLabels = [];
        //this.catgPieLabels.length = 0;
        //this.catgPieLabels.splice(0, this.catgPieLabels.length);
        //this.catgPieData = [];
        //this.catgPieData.length = 0;
        //this.catgPieData.splice(0, this.catgPieData.length);
        // reset datas
        while (this.catgPieLabels.length > 0) {
            this.catgPieLabels.pop();
        }
        while (this.catgPieData.length > 0) {
            this.catgPieData.pop();
        }
        var catgPieDataT = [];
        var soldFlag = false;
        for (var count = 0; count < this.schemes.length && count < 5; count++) {
            if (this.schemes[count].sold) {
                soldFlag = true;
                catgPieDataT.push(this.schemes[count].sold);
                this.catgPieLabels.push(this.schemes[count].s_name);
            }
        }
        if (!soldFlag) {
            console.log("No funds are sold");
            this.catgPieLabels = ["No funds are sold"];
            this.catgPieData = [{ data: [0], label: "No Data" }];
        }
        else {
            console.log("labels: " + this.catgPieLabels);
            console.log("data: " + catgPieDataT);
            this.catgPieData = [{ data: catgPieDataT, label: "" }];
        }
    };
    /////////////////////////////////////////////////////////////////////////
    BarChartDemoComponent.prototype.populateFundGraph = function () {
        var _this = this;
        if (this.fundChart) {
            this.funds = [];
            this.categories.forEach(function (_catg) {
                // schemes
                _catg.scheme.forEach(function (_scheme) {
                    if (_this.fundChart == "sold" && _scheme.sold > 0)
                        _this.funds.push(_scheme);
                    else if (_this.fundChart == "NAV" && _scheme.NAV > 0)
                        _this.funds.push(_scheme);
                });
            });
        }
        else {
            console.log("Undefined fund chart");
        }
        if (this.funds.length) {
            if (this.fundChart == "sold")
                this.funds.sort(function (a, b) {
                    return parseFloat(a.sold) - parseFloat(b.sold);
                });
            if (this.fundChart == "NAV")
                this.funds.sort(function (a, b) {
                    return parseFloat(a.NAV) - parseFloat(b.NAV);
                });
        }
        else {
            console.log("No funds are sold");
        }
        while (this.fundLineLabels.length > 0) {
            this.fundLineLabels.pop();
        }
        while (this.fundLineData.length > 0) {
            this.fundLineData.pop();
        }
        var _fundSoldLineData = [];
        var _fundNAVLineData = [];
        var soldFlag = false;
        for (var count = 0; count < this.funds.length && count < 10; count++) {
            if (this.fundChart == "sold" && this.funds[count].sold) {
                soldFlag = true;
                _fundSoldLineData.push(this.funds[count].sold);
                this.fundLineLabels.push(this.funds[count].s_name);
            }
            else if (this.fundChart == "NAV" && this.funds[count].NAV) {
                soldFlag = true;
                _fundNAVLineData.push(this.funds[count].NAV);
                this.fundLineLabels.push(this.funds[count].s_name);
            }
        }
        if (!soldFlag) {
            console.log("No funds are sold/NAV");
            this.fundLineLabels = ["No funds are sold/NAV"];
            this.fundLineData = [{ data: [0], label: "No Data" }];
        }
        else {
            console.log("labels: " + this.fundLineLabels);
            console.log("data: " + _fundSoldLineData);
            if (this.fundChart == "sold")
                this.fundLineData = [
                    { data: _fundSoldLineData, label: "SOLD" }
                ];
            else if (this.fundChart == "NAV")
                this.fundLineData = [
                    { data: _fundNAVLineData, label: "NAV" }
                ];
        }
    };
    BarChartDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bar-chart-demo',
            template: __webpack_require__("../../../../../client/app/charts/bar-chart-demo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_4__purchases_purchases_service__["a" /* PurchasesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSnackBar */]])
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());



/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <h2 style=\"font-family: Cambria; font-weight: bold\">So can I invest now, for my vacation 8 months later?</h2><br/>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <img src=\"../../assets/images/homepagefolder/So-can-I-invest-now%2C-for-my-vacation-8-months-later.png\" class=\"w-100\" alt=\"So can I invest now, for my vacation 8 months later? \">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"article-content\">\r\n                <div property=\"schema:text\" class=\"clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item\"><p>Articles about Mutual Funds are usually written for planning to achieve certain long term specific goals, and investors assume that other goals, especially short term cannot be achieved.</p>\r\n                    <p>Let us break this myth with an example.</p>\r\n                    <p>Ramesh, a travel junkie got to satisfy his wanderlust, when the company he worked for achieved success and rewarded its employees with bonuses.</p>\r\n                    <p>With his bonus Ramesh decided to go on a Europe trip, but his work on a big and prestigious project was incomplete and approaching its deadline. The project would end in the next eight months.</p>\r\n                    <p>The exact date of Ramesh’s trip is yet to be finalized. Looking at his expenses- some money needs to be spent before and some during the trip. Uncertainty regarding the exact dates on which how much money is to be paid is there.</p>\r\n                    <p>Certain Mutual Fund schemes are ideal for such cases.</p>\r\n                    <p>Ideally Ramesh should park these savings into a liquid fund to take them out on any working day. Money will be in his account the day after he submits a request for withdrawal. Ramesh can even request for withdrawal through an SMS or App.</p>\r\n                    <p>Planning for even short term goals becomes convenient with this.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocanIinvestnowformyvacation8monthslater; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SocanIinvestnowformyvacation8monthslater = (function () {
    function SocanIinvestnowformyvacation8monthslater() {
    }
    SocanIinvestnowformyvacation8monthslater.prototype.ngOnInit = function () {
    };
    SocanIinvestnowformyvacation8monthslater = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.html"),
            styles: [__webpack_require__("../../../../../client/app/homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later.css")]
        })
    ], SocanIinvestnowformyvacation8monthslater);
    return SocanIinvestnowformyvacation8monthslater;
}());



/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-content\r\n{\r\n    text-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n                <h2 style=\"font-family: Cambria; font-weight: bold\">Why should one invest in Mutual Funds?</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                        <img src=\"../../assets/images/homepagefolder/Why-should-one-invest-in-Mutual-Funds.png\" class=\"w-100\" alt=\"Why should one invest in Mutual Funds?\">\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                        <div class=\"article-content\">\r\n                                <div property=\"schema:text\" class=\"clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item\">\r\n                                        <p>One should never invest in Mutual Funds, but should invest through them.</p>\r\n                                        <p>To elaborate, we invest in various investment avenues based on our requirements, e.g. for capital growth - we invest in equity shares, for safety of capital and regular income - we buy fixed income products.</p>\r\n                                        <p>The concern for most investors is: how to know which instruments are best for them? One may not have enough abilities, time or interest to conduct the research.</p>\r\n                                        <p>To manage investments, one can outsource certain tasks one is unable to do. Anyone can outsource ‘managing one’s investments’ to a professional firm – the Mutual Fund company. Mutual Funds offer various avenues to fulfill different objectives, which investors can choose from based on one’s unique situation and objective.</p>\r\n                                        <p>Mutual Fund companies manage all administrative activities including paperwork. They also facilitate accounting and reporting the progress of the investment portfolios through a combination of Net Asset Values (NAVs) and the account statements.</p>\r\n                                        <p>Mutual Fund is a great convenience for those who need to invest their money for future requirements. A team of professionals manages the money and the investors can enjoy the fruits of this expertise without getting involved in the mundane tasks.</p>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyshouldoneinvestinMutualFunds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WhyshouldoneinvestinMutualFunds = (function () {
    function WhyshouldoneinvestinMutualFunds() {
    }
    WhyshouldoneinvestinMutualFunds.prototype.ngOnInit = function () {
    };
    WhyshouldoneinvestinMutualFunds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.html"),
            styles: [__webpack_require__("../../../../../client/app/homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds.css")]
        })
    ], WhyshouldoneinvestinMutualFunds);
    return WhyshouldoneinvestinMutualFunds;
}());



/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/>\r\n<div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n                <h2 style=\"font-family: Cambria; font-weight: bold\">Can Mutual Funds help create wealth?</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                        <img src=\"../../assets/images/homepagefolder/Can-Mutual-Funds-help-create-wealth_0.png\" class=\"w-100\" alt=\"Can Mutual Funds help create wealth?\" typeof=\"foaf:Image\">\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                        <div class=\"article-content\">\r\n                                <div property=\"schema:text\" class=\"clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item\"><p>Business and commerce allows us to create wealth by investing our money with those who are on the path to creating wealth. We can be investors in businesses of entrepreneurs, by investing in stocks of various companies. As the entrepreneurs and the managers run their businesses efficiently and profitably, the shareholders get the benefits. In this regard, Mutual Funds are a great way to build wealth.</p>\r\n                                        <p>But how do we know which stocks to buy, and when?</p>\r\n                                        <p>That is where taking professional help counts. They also take the advantage of a large corpus to explore more opportunities simultaneously. Like a balanced diet – we all need proteins, vitamins, carbohydrates, etc. Eating only one type results in some nutrient deficiency. Similarly, in a <strong>diversified equity fund</strong> you’re <strong>exposed to different segments of the economy</strong>, and also <strong>protected from the potential downside</strong>.</p>\r\n                                        <p>Invest in a professionally managed, diversified equity fund and stay invested for long period to create wealth for yourself and your next generation.</p>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canmutualfundshelpcreatewealth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var canmutualfundshelpcreatewealth = (function () {
    function canmutualfundshelpcreatewealth() {
    }
    canmutualfundshelpcreatewealth.prototype.ngOnInit = function () {
    };
    canmutualfundshelpcreatewealth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.html"),
            styles: [__webpack_require__("../../../../../client/app/homepage/HomePageFolder/can-mutual-funds-help-create-wealth.css")]
        })
    ], canmutualfundshelpcreatewealth);
    return canmutualfundshelpcreatewealth;
}());



/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/>\r\n<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"what-are-the-various-types-of-funds.css\"> -->\r\n<div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n                <h2 style=\"font-family: Cambria; font-weight: bold\">What are the various types of funds?</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                        <!-- <img src=\"../../../assets/images/What-are-the-various-types-of-funds_thumb.png\" class=\"w-100\" alt=\"What are the various types of funds?\" > -->\r\n                        <iframe width=\"650\" height=\"345\" src=\"https://www.youtube.com/embed/OwSdwgsvnVQ\">\r\n                        </iframe>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                        <div class=\"article-content\">\r\n                                <div property=\"schema:text\" class=\"clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item\"><p>Various types of Mutual Funds exist to cater to different needs of different people. Largely, they are of three types.</p>\r\n                                        <ol class=\"decimal\">\r\n                                                <li><strong>Equity </strong>or<strong> Growth Funds</strong></li>\r\n                                        </ol>\r\n                                        <ul class=\"dash\" style=\"list-style-type:none\">\r\n                                                <li>These invest predominantly in equities i.e. shares of companies</li>\r\n                                                <li>The primary objective is <strong>wealth creation</strong> or <strong>capital appreciation</strong>.</li>\r\n                                                <li>They have the potential to generate higher return and are best for long term investments.</li>\r\n                                                <li>Examples would be\r\n                                                <ul class=\"circle\"><li>“Large Cap” funds which invest predominantly in companies that run large established business</li>\r\n                                                        <li>“Mid Cap” funds which invest in mid-sized companies.</li>\r\n                                                        <li>“Small Cap” funds that invest in small sized companies</li>\r\n                                                        <li>“Multi Cap” funds that invest in a mix of large, mid and small sized companies.</li>\r\n                                                        <li>“Sector” funds that invest in companies that are related to one type of business. For e.g. Technology funds that invest only in technology companies</li>\r\n                                                        <li>“Thematic” funds that invest in a common theme. For e.g. Infrastructure funds that invest in companies that will benefit from the growth in the infrastructure segment</li>\r\n                                                        <li>Tax-Saving Funds</li>\r\n                                                </ul>\r\n                                                </li>\r\n                                        </ul>\r\n                                        <ol class=\"decimal\" start=\"2\">\r\n                                                <li><strong>Income</strong> or <strong>Bond</strong> or <strong>Fixed Income Funds</strong></li>\r\n                                        </ol>\r\n                                        <ul class=\"dash\" style=\"list-style-type:none\"><li>These invest in Fixed Income Securities, like Government Securities or Bonds, Commercial Papers and Debentures, Bank Certificates of Deposits and Money Market instruments like Treasury Bills, Commercial Paper, etc.</li>\r\n                                                <li>These are relatively <strong>safer investments</strong> and are suitable for&nbsp;<strong>Income Generation</strong>.</li>\r\n                                                <li>Examples would be Liquid, Short Term, Floating Rate, Corporate Debt, Dynamic Bond, Gilt Funds, etc.</li>\r\n                                        </ul>\r\n                                        <ol class=\"decimal\" start=\"3\">\r\n                                                <li><strong>Hybrid Funds</strong></li>\r\n                                        </ol>\r\n                                        <ul class=\"dash\" style=\"list-style-type:none\">\r\n                                                <li>These invest in both Equities and Fixed Income, thus offering the best of both, <strong>Growth Potential</strong> as well as <strong>Income Generation</strong>.</li>\r\n                                                <li>Examples would be Aggressive Balanced Funds, Conservative Balanced Funds, Pension Plans, Child Plans and Monthly Income Plans, etc.</li>\r\n                                        </ul>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whatarethevarioustypesoffunds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var whatarethevarioustypesoffunds = (function () {
    function whatarethevarioustypesoffunds() {
    }
    whatarethevarioustypesoffunds.prototype.ngOnInit = function () {
    };
    whatarethevarioustypesoffunds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.html"),
            styles: [__webpack_require__("../../../../../client/app/homepage/HomePageFolder/what-are-the-various-types-of-funds.css")]
        })
    ], whatarethevarioustypesoffunds);
    return whatarethevarioustypesoffunds;
}());



/***/ }),

/***/ "../../../../../client/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-nav-collapse {\r\n    background-color: #78909c !important; \r\n}\r\n.navbar:not(.top-nav-collapse) {\r\n    background: transparent !important;\r\n}\r\n@media (max-width: 768px) {\r\n    .navbar:not(.top-nav-collapse) {\r\n        background: #78909c !important;\r\n    } \r\n}\r\nh1 {\r\n    letter-spacing: 8px;\r\n}\r\nh5 {\r\n    letter-spacing: 3px;\r\n}\r\n.hr-light {\r\n    border-top: 3px solid #fff;\r\n    width: 80px;\r\n}\r\n@media (max-width: 740px) {\r\n    .full-height,\r\n    .full-height body,\r\n    .full-height header,\r\n    .full-height header .view {\r\n        height: 700px; \r\n    } \r\n}\r\n    \r\n\r\n\r\n.card\r\n{\r\n    \r\n    max-width: 19.2rem;\r\n}\r\n\r\n.btnKnowMore:hover{\r\n    background-color: #078d07e6 !important;\r\n}\r\n\r\n.btnKnowMore {\r\n    border: 2px solid green;\r\n    background-color: transparent !important;\r\n    font-weight: bolder;\r\n    color: black !important;\r\n}\r\n\r\n.grow {\r\n    transition: all .2s ease-in-out !important;\r\n}\r\n.grow:hover {\r\n    -webkit-transform: scale(1.1) !important;\r\n            transform: scale(1.1) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n    <div class=\"view hm-black-light jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url(../../assets/images/article-5.jpg);min-height: 100vh;background-size: cover; background-repeat:no-repeat;\">\n        <div class=\"full-bg-img\">\n            <div class=\"container flex-center\">\n                <div class=\"row pt-5 mt-3\">\n                    <div class=\"col-md-12\">\n                        <div class=\"text-center grow\">\n                            <h1 class=\"display-1 mb-3 wow fadeInDown\" data-wow-delay=\"0.3s\"><strong>Mutual Fund Mart</strong></h1>\n                            <hr class=\"hr-dark mt-4 wow fadeInDown\" data-wow-delay=\"0.4s\">\n                            <h5 class=\"font-up mb-5 wow fadeInDown\" data-wow-delay=\"0.4s\"><strong>Buy Mutual Funds</strong></h5>\n                            <a class=\"btn btn-outline-white wow fadeInDown waves-light btnKnowMore\" data-wow-delay=\"0.4s\" href=\"#KnowMore\">Know More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<br/>\n\n\n<!--Home Knowledge Article -->\n<div class=\"container-fluid\">\n    <div align=\"center\" style=\"font-family: 'Times New Roman', Times, serif; font-weight: bold\">KNOWLEDGE ARTICLES</div>\n        <div class=\"card-deck mt-4\" id=\"KnowMore\">\n\n            <a href=\"whatarethevarioustypesoffunds\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\"  src =\"../../assets/images/homepagefolder/What-are-the-types-of-Mutual-Funds.png\"alt=\"Card image cap\">\n                    <div class=\"card-body\" style=\"background-size:contain; background-repeat: no-repeat;\">\n                    <p class=\"card-text\"style=\"font-family: 'cambria'\">What are the various types of funds?</p>\n                    </div>\n                </div>\n            </a>\n\n            <a href=\"canmutualfundshelpcreatewealth\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\"  src =\"../../assets/images/homepagefolder/Can-Mutual-Funds-help-create-wealth_0.png\"alt=\"Card image cap\">\n                    <div class=\"card-body\" style=\"background-size:contain; background-repeat: no-repeat;\">\n                    <p class=\"card-text\"style=\"font-family: 'cambria'\">Can Mutual Funds help create wealth?</p>\n                    </div>\n                </div>\n            </a>\n\n            <a href=\"SocanIinvestnowformyvacation8monthslater\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\"  src =\"../../assets/images/homepagefolder/So-can-I-invest-now,-for-my-vacation-8-months-later.png\"alt=\"Card image cap\">\n                    <div class=\"card-body\" style=\"background-size:contain; background-repeat: no-repeat;\">\n                    <p class=\"card-text\"style=\"font-family: 'cambria'\">So can I invest now, for my vacation?</p>\n                    </div>\n                </div>\n            </a>\n\n            <a href=\"WhyshouldoneinvestinMutualFunds\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\"  src =\"../../assets/images/homepagefolder/Why-should-one-invest-in-Mutual-Funds.png\"alt=\"Card image cap\">\n                    <div class=\"card-body\" style=\"background-size:contain; background-repeat: no-repeat;\">\n                    <p class=\"card-text\"style=\"font-family: 'cambria'\">Why should one invest in Mutual Funds?</p>\n                    </div>\n                </div>\n            </a>\n        </div>\n</div>\n<!--Home Knowledge Article -->\n"

/***/ }),

/***/ "../../../../../client/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../client/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../client/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../client/app/purchases/purchasehistory-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.demo {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/purchases/purchasehistory-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div align=\"center\">\r\n  <h3>Purchase History</h3>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <hr> <br>\r\n  <div class=\"text-center\" *ngIf='!orders.length'>\r\n    No orders yet.\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf='orders && orders.length'>\r\n    <div class=\"card-group col-sm-12 mb-5\" *ngFor='let _order of orders'>\r\n      <div class=\"card\">\r\n        <div class=\"card-header text-right\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <ul class=\"demo text-left\">\r\n                <li>\r\n                  <h5>Order Id: {{_order.order_id}}</h5>\r\n                </li>\r\n                <li>\r\n                  <b>Total: ₹ {{_order.net_amount}} | Funds: {{_order.net_funds}}</b>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-6\" *ngIf=\"_userService.isPrivilegeUser()\">\r\n              <ul class=\"demo text-right\">\r\n                <li>\r\n                  <h5>Buyer Name:&nbsp;{{_order.buyer_name}}</h5>\r\n                </li>\r\n                <li>{{_order.email_id}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-striped\" style=\"font-size:medium\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Category Name > Scheme Name</th>\r\n                  <th class=\"text-center\" scope=\"col\">NAV</th>\r\n                  <th class=\"text-center\" scope=\"col\">QTY</th>\r\n                  <th class=\"text-center\" scope=\"col\">Amount</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngIf='_order.purchase && _order.purchase.length'>\r\n                <tr *ngFor='let _fund of _order.purchase'>\r\n                  <td>{{_fund.c_name}} > {{_fund.s_name}}</td>\r\n                  <td class=\"text-center\">{{_fund.NAV}}</td>\r\n                  <td class=\"text-center\">{{_fund.qty}}</td>\r\n                  <td class=\"text-center\">{{_fund.NAV * _fund.qty}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <footer class=\"blockquote-footer text-right\">Purchased On\r\n                <cite title=\"Source Title\">{{_order.p_date}}</cite>\r\n            </footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/purchases/purchasehistory-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchases_service__ = __webpack_require__("../../../../../client/app/purchases/purchases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PurchaseHistoryFormComponent = (function () {
    function PurchaseHistoryFormComponent(_userService, _categoryService, _purchaseService, _router, _route, _location, _snackBar) {
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._purchaseService = _purchaseService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        console.log("Initializing purchase history component constructor...");
        this.orders = [];
        if (!this._userService.isAuthenticated()) {
            // not authenticated
            // display error message
            var msg = "Please login first";
            console.log(msg);
            this._snackBar.open(msg, "Authentication required..!!", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        this.getPurchaseDetails();
        console.log("Form Value = " + JSON.stringify(this.orders, null, 4));
    }
    PurchaseHistoryFormComponent.prototype.getPurchaseDetails = function () {
        var _this = this;
        if (this._userService.isPrivilegeUser()) {
            // privileged user
            this._purchaseService.getPurchaseDetails()
                .subscribe(function (_orders) {
                _this.orders = _orders;
            });
        }
        else {
            // not privileged user
            var _u = this._userService.getUserInfo();
            this._purchaseService.getPurchaseDetails(_u.email_id)
                .subscribe(function (_orders) {
                _this.orders = _orders;
            });
        }
    };
    PurchaseHistoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'purchasehistory-form',
            template: __webpack_require__("../../../../../client/app/purchases/purchasehistory-form.component.html"),
            styles: [__webpack_require__("../../../../../client/app/purchases/purchasehistory-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_4__purchases_service__["a" /* PurchasesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSnackBar */]])
    ], PurchaseHistoryFormComponent);
    return PurchaseHistoryFormComponent;
}());



/***/ }),

/***/ "../../../../../client/app/purchases/purchases.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PurchasesService = (function () {
    function PurchasesService(_http) {
        this._http = _http;
        this._purchaseUrl = "https://mutual-fund-mart.herokuapp.com/api/purchases/";
        console.log("Initializing Purchases service ...");
    }
    PurchasesService.prototype.changeQty = function (_fund) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._purchaseUrl + 'change_qty', JSON.stringify(_fund), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PurchasesService.prototype.delFromCart = function (_fund) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._purchaseUrl + 'del_from_cart', JSON.stringify(_fund), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PurchasesService.prototype.purchase = function (_purchase) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._purchaseUrl, JSON.stringify(_purchase), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PurchasesService.prototype.getPurchaseDetails = function (_email_id) {
        if (_email_id) {
            return this._http.get(this._purchaseUrl + _email_id)
                .map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this._purchaseUrl + "purchaseHistory")
                .map(function (res) { return res.json(); });
        }
    };
    PurchasesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PurchasesService);
    return PurchasesService;
}());



/***/ }),

/***/ "../../../../../client/app/purchases/viewcart-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card-footer-btn \r\n{\r\n    background-color: orange!important;\r\n    text-align: center!important;\r\n    color: white!important;\r\n}\r\n\r\n.card-footer-btn:hover {\r\n    background-color: rgb(255, 136, 0) !important;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n    width: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/purchases/viewcart-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><div class=\"row\">\r\n  <!-- for cart details -->\r\n  <div class=\"col-sm-9\">\r\n    <div class=\"card\" id=\"cart-card\">\r\n      <div class=\"card-header\">MY CART ({{user.cart.length}})</div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\" *ngIf='!user.cart.length'>\r\n          <p class=\"text-center\">Your cart is empty.</p>\r\n          \r\n        </div>\r\n\r\n        <div *ngIf='user.cart && user.cart.length'>\r\n          <ul class=\"list-group list-group-flush\" *ngFor='let fund of user.cart'>\r\n            <li class=\"list-group-item\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <!-- for scheme image -->\r\n                  <div class=\"col-sm-2\">\r\n                    <img class=\"img-fluid\" [src]=\"schImgSrcPrefix + fund.s_img + imgJPGExtension\" alt=\"s_img\">\r\n                  </div>\r\n\r\n                  <!-- for scheme details -->\r\n                  <div class=\"col-sm-5\">\r\n                    <p class=\"card-text\">{{fund.s_name}}\r\n                      <br>\r\n                      <small class=\"text-muted\">Category: {{fund.c_name}}</small> &nbsp;|\r\n                      <a class=\"btn btn-link px-2 py-1\" (click)=\"delFromCart(fund)\" title=\"Delete from cart\">\r\n                        <i class=\"fas fa-trash btnRed\"></i>\r\n                        <!-- <strong style=\"color:red\">Remove</strong> -->\r\n                      </a>\r\n                    </p>\r\n                  </div>\r\n\r\n                  <!-- for price NAV-->\r\n                  <div class=\"col-sm-2 text-center\">\r\n                    <i class=\"fas fa-rupee-sign\"></i> {{fund.NAV}}\r\n                  </div>\r\n\r\n                  <!-- for quantity -->\r\n                  <div class=\"col-sm-3 text-center\">\r\n                    <!-- for minus -->\r\n                    <button type=\"button\" class=\"btn btn-link p-0\" (click)=\"minusQty(fund)\">\r\n                      <i class=\"fas fa-minus btnBlack\"></i>\r\n                    </button>\r\n\r\n                    <!-- for scheme quantity -->\r\n                    <input type=\"number\" [(ngModel)]=\"fund.qty\" required min=\"1\" max=\"999\" (change)=\"changeQty(fund)\" #qtyRef=\"ngModel\" style=\"text-align: center\">\r\n\r\n                    <!-- for plus -->\r\n                    <button type=\"button\" class=\"btn btn-link p-0\" (click)=\"addQty(fund)\">\r\n                      <i class=\"fas fa-plus btnBlack\"></i>\r\n                    </button>\r\n                    <div *ngIf=\"qtyRef.invalid && (qtyRef.dirty || qtyRef.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"qtyRef.errors.required\">\r\n                            *required\r\n                        </div>\r\n                        <div *ngIf=\"qtyRef.errors.min\">\r\n                            *minimum 1\r\n                        </div>\r\n                        <div *ngIf=\"qtyRef.errors.max\">\r\n                            *maximum 999\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div> <!-- row- ngfor one cart fund-->\r\n\r\n                <!-- if quantity more than 1 -->\r\n                <div *ngIf='fund.qty > 1'>\r\n                  <hr>\r\n                    <p class=\"text-right\">\r\n                    {{fund.NAV}} (NAV)\r\n                    X\r\n                    {{fund.qty}} (QTY) = {{fund.NAV * fund.qty}}/-\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- for ngif cart contenet -->\r\n\r\n      </div>\r\n      <!-- cart card body -->\r\n\r\n\r\n      <!-- cart card footer -->\r\n      <div class=\"card-footer text-right\">\r\n        <a class=\"btn btn-primary btnWhite\" (click)=\"continueShopping()\">\r\n          <i class=\"fas fa-angle-left fa-lg\"></i>&nbsp; CONTINUE SHOPPING</a>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- card -->\r\n  </div>\r\n  <!-- for cart details -->\r\n\r\n  <!-- for total coloumn -->\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"card\" id=\"cart-card\">\r\n      <div class=\"card-header\">PRICE DETAILS</div>\r\n      <div class=\"card-body\">\r\n        <div>Total Funds: {{netFundsQty}}</div>\r\n        <div>Amount Payable: <i class=\"fas fa-rupee-sign\"></i>\r\n          {{netFundsAmt}}</div>\r\n      </div>\r\n      <div class=\"card-footer card-footer-btn\">\r\n        <a (click)=\"onPurchase()\">PLACE ORDER</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- for total coloumn -->\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/purchases/viewcart-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCartFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchases_service__ = __webpack_require__("../../../../../client/app/purchases/purchases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewCartFormComponent = (function () {
    function ViewCartFormComponent(_userService, _categoryService, _purchaseService, _router, _route, _location, _snackBar) {
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._purchaseService = _purchaseService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        console.log("Initializing cart component constructor ...");
        this.user = {};
        this.user.cart = {};
        this.netFundsAmt = 0;
        this.netFundsQty = 0;
        // image src variables
        this.schImgSrcPrefix = "../../assets/images/scheme/";
        this.imgJPGExtension = ".jpg";
        this.imgPNGExtension = ".png";
        // auth guard
        if (!this._userService.isAuthenticated()) {
            // not authenticated
            // display error message
            var msg = "Please login first";
            console.log(msg);
            this._snackBar.open(msg, "Authentication required..!!", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        // get user info
        this.getUserDetails();
    }
    ViewCartFormComponent.prototype.getUserDetails = function () {
        var _this = this;
        var _u = this._userService.getUserInfo();
        if (_u) {
            // get user info
            this._userService.getUser(_u.user_id)
                .subscribe(function (_user) {
                _this.user = _user;
                _this.totalAmount();
            });
        }
    };
    ViewCartFormComponent.prototype.changeQty = function (_fund) {
        var _this = this;
        if ((_fund.qty < 1) || (_fund.qty > 999)) {
            //_fund.qty = 1;
            this._snackBar.open("Qunatity should be in range of 1-999", "", {
                duration: 3000
            });
        }
        else {
            console.log("qty: " + _fund.qty);
            var newQty = {
                user_id: this.user.user_id,
                s_id: _fund.s_id,
                qty: _fund.qty,
            };
            this._purchaseService.changeQty(newQty)
                .subscribe(function (_success) {
                console.log("quantity changed in db");
                var msg = "Qunatity changed for " + _fund.s_name + " to " + _fund.qty;
                _this._snackBar.open(msg, "", {
                    duration: 3000
                });
            }, function (err) {
                console.log("error changing qty in db");
                var msg = "Qunatity NOT changed for " + _fund.s_name + " to " + _fund.qty;
                _this._snackBar.open(msg, "ERROR", {
                    duration: 3000
                });
            });
        }
        this.getUserDetails();
    };
    ViewCartFormComponent.prototype.delFromCart = function (_fund) {
        var _this = this;
        var delFund = {
            user_id: this.user.user_id,
            s_id: _fund.s_id,
            s_name: _fund.s_name
        };
        this._purchaseService.delFromCart(delFund)
            .subscribe(function (_success) {
            console.log("fund deleted in db");
            var msg = "Deleted fund: " + _fund.s_name;
            _this._snackBar.open(msg, "SUCCESS..!!", {
                duration: 3000
            });
            _this.getUserDetails();
        }, function (err) {
            console.log("Fund delete request error");
            var msg = "Delete error for fund: " + _fund.s_name;
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 3000
            });
        });
    };
    ViewCartFormComponent.prototype.onPurchase = function () {
        var _this = this;
        var purchaseDetails = {
            user: this.user,
            net_amount: this.netFundsAmt,
            net_funds: this.netFundsQty
        };
        this._purchaseService.purchase(purchaseDetails)
            .subscribe(function (_success) {
            console.log("Purchase is done");
            var msg = "You bought all funds: " + _this.netFundsQty;
            _this._snackBar.open(msg, "CONGRATS", {
                duration: 5000
            });
            _this.getUserDetails();
        }, function (err) {
            console.log("Purchase error");
            var msg = "Purchase failed";
            _this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
        });
    };
    ViewCartFormComponent.prototype.minusQty = function (_fund) {
        if (_fund.qty > 1) {
            console.log("minus: ");
            _fund.qty--;
            this.changeQty(_fund);
        }
        else {
            this._snackBar.open("Qunatity should be 1 or more", "USE REMOVE TO DELETE", {
                duration: 3000
            });
        }
    };
    ViewCartFormComponent.prototype.addQty = function (_fund) {
        if (_fund.qty < 999) {
            console.log("add: ");
            _fund.qty++;
            this.changeQty(_fund);
        }
        else {
            this._snackBar.open("Qunatity should be 999 or less", "", {
                duration: 3000
            });
        }
    };
    ViewCartFormComponent.prototype.totalAmount = function () {
        var _this = this;
        if (this.user) {
            this.netFundsQty = 0;
            this.netFundsAmt = 0;
            this.user.cart.forEach(function (_fund) {
                _this.netFundsQty += _fund.qty;
                _this.netFundsAmt += _fund.qty * _fund.NAV;
            });
        }
        else {
            console.log("No user info: netFundsDetails()");
        }
    };
    ViewCartFormComponent.prototype.continueShopping = function () {
        this._location.back();
    };
    ViewCartFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewcart-form',
            template: __webpack_require__("../../../../../client/app/purchases/viewcart-form.component.html"),
            styles: [__webpack_require__("../../../../../client/app/purchases/viewcart-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_4__purchases_service__["a" /* PurchasesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSnackBar */]])
    ], ViewCartFormComponent);
    return ViewCartFormComponent;
}());



/***/ }),

/***/ "../../../../../client/app/users/buyerdetail-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/><table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Email-id</th>\r\n      <th class=\"text-center\" scope=\"col\">Mobile No.</th>\r\n      <th class=\"text-center\" scope=\"col\">Gender</th>\r\n      <th class=\"text-center\" scope=\"col\">Net Amount</th>\r\n      <th class=\"text-center\" scope=\"col\">Net Funds</th>\r\n      <th class=\"text-center\" scope=\"col\">Joined Date</th>\r\n      <th class=\"text-center\" scope=\"col\">Privilege</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf='users && users.length'>\r\n    <tr *ngFor='let user of users'>\r\n      <th scope=\"row\">{{user.name.f_name +\" \"+ user.name.l_name | uppercase}}</th>\r\n      <td>{{user.email_id}}</td>\r\n      <td>{{user.phone}}</td>\r\n      <td class=\"text-center\">{{user.gender}}</td>\r\n      <td class=\"text-center\">{{user.net_amount}}</td>\r\n      <td class=\"text-center\">{{user.net_funds}}</td>\r\n      <td class=\"text-center\">{{user.joined_date}}</td>\r\n      <td *ngIf=\"admin_id != user.user_id\">\r\n          <select class=\"form-control py-0\" id=\"privilege\" name=\"privilege\" (change)=\"togglePrivilege(user.email_id, user.privilege)\" [(ngModel)]=\"user.privilege\" required #privilegeRef=\"ngModel\" style=\"height: 1.3rem !important\">\r\n              <option>true</option>\r\n              <option>false</option>\r\n          </select>\r\n      </td>\r\n      <td *ngIf=\"admin_id == user.user_id\" class=\"text-center\">\r\n          {{user.privilege}}\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../client/app/users/buyerdetail-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerDeatilFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories_service__ = __webpack_require__("../../../../../client/app/categories/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuyerDeatilFormComponent = (function () {
    function BuyerDeatilFormComponent(_usersService, _categoryService, _router, _route, _location, _snackBar) {
        this._usersService = _usersService;
        this._categoryService = _categoryService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._snackBar = _snackBar;
        console.log("Initializing all-categories-component constructor ...");
        this.users = [];
        if (!this._usersService.isAuthenticated()) {
            // not authenticated
            // display error message
            var msg = "Please login first";
            console.log(msg);
            this._snackBar.open(msg, "Authentication required..!!", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        else if (!this._usersService.isPrivilegeUser()) {
            // not privileged
            // display error message
            var msg = "Not authorised to view this page, conatct admin";
            console.log(msg);
            this._snackBar.open(msg, "", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
    }
    BuyerDeatilFormComponent.prototype.ngOnInit = function () {
        console.log("Initializing all-categories-component ngOnIt ...");
        this.getUsers();
        console.log(this.users);
    };
    BuyerDeatilFormComponent.prototype.getUsers = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (_users) {
            _this.users = _users;
            _this.getAdminId();
        });
    };
    BuyerDeatilFormComponent.prototype.getAdminId = function () {
        var _u = this._usersService.getUserInfo();
        this.admin_id = _u.user_id;
    };
    BuyerDeatilFormComponent.prototype.togglePrivilege = function (email_id, privilege) {
        var _this = this;
        var togPrivilege = {
            email_id: email_id,
            privilege: privilege
        };
        this._usersService.togglePrivilege(togPrivilege)
            .subscribe(function (_success) {
            var msg = "Privilege toggled for " + email_id;
            if (privilege) {
                _this._snackBar.open(msg, "Admin user", {
                    duration: 3000
                });
            }
            else {
                _this._snackBar.open(msg, "Normal user", {
                    duration: 3000
                });
            }
        }, function (err) {
            var msg = "Privilege toggle error for " + email_id;
            _this._snackBar.open(msg, "Try again..!!", {
                duration: 3000
            });
        });
    };
    BuyerDeatilFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'buyerdetail-form',
            template: __webpack_require__("../../../../../client/app/users/buyerdetail-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__categories_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSnackBar */]])
    ], BuyerDeatilFormComponent);
    return BuyerDeatilFormComponent;
}());



/***/ }),

/***/ "../../../../../client/app/users/profile-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/users/profile-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/><br/><br/>\r\n<div class=\"container\">\r\n        <h3>My Profile</h3>\r\n        <hr>\r\n        <div class=\"row\">\r\n            <!-- left column -->\r\n            <div class=\"col-md-4\">\r\n            <div class=\"text-center\">\r\n            <img [src]=\"userImgSrcPrefix + user.gender + imgPNGExtension\" class=\"img-fluid\" alt=\"user_img\">\r\n              <h6>{{user?.name.f_name}}</h6>\r\n              <!-- <input type=\"file\" class=\"form-control\"> -->\r\n            </div>\r\n          </div>\r\n          \r\n          <!-- edit form column -->\r\n          <div class=\"col-md-8 personal-info\">\r\n            <div class=\"alert alert-info alert-dismissable\" *ngIf=\"editAlert\">\r\n              <a class=\"panel-close close\" (click)=\"dismissAlert()\" data-dismiss=\"alert\">×</a> \r\n              <!-- <i class=\"fa fa-coffee\"></i> -->\r\n              {{msg}}\r\n            </div>\r\n            \r\n            <form class=\"form-horizontal\" role=\"form\" #userEditRef=\"ngForm\" (ngSubmit)=\"onSaveChanges(userEditRef.value)\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Personal info</h5> \r\n                    </div>\r\n                    <div class=\"col-md-6 text-right\">\r\n                        <input type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"editClicked()\" *ngIf=\"!editMode\" value=\"Edit\">\r\n                        <input type=\"submit\" class=\"btn btn-primary btn-md\" *ngIf=\"editMode\" [disabled]=\"userEditRef.invalid\" value=\"Save Changes\">\r\n                        <input type=\"button\" class=\"btn btn-default btn-md\" (click)=\"resetValues()\" *ngIf=\"editMode\" value=\"Cancel\">\r\n                    </div>\r\n                </div> <br> <br>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label\" for=\"f_nameE\">First name</label>\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"!editMode\" name=\"f_nameE\" id=\"f_nameE\" [(ngModel)]=\"user?.name.f_name\" required minlength=\"3\" #fnameRef=\"ngModel\">\r\n                        <div *ngIf=\"fnameRef.invalid && (fnameRef.dirty || fnameRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"fnameRef.errors.required\">\r\n                                    *required\r\n                            </div>\r\n                            <div *ngIf=\"fnameRef.errors.minlength\">\r\n                                    *minimum 3 char long\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label\" for=\"l_nameE\">Last name</label>\r\n                        <input type=\"text\" class=\"form-control\" [disabled]=\"!editMode\" name=\"l_nameE\" id=\"l_nameE\" [(ngModel)]=\"user?.name.l_name\" required minlength=\"3\" #lnameRef=\"ngModel\">\r\n                        <div *ngIf=\"lnameRef.invalid && (lnameRef.dirty || lnameRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"lnameRef.errors.required\">\r\n                                *required\r\n                            </div>\r\n                            <div *ngIf=\"lnameRef.errors.minlength\">\r\n                                *minimum 3 char long\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"email_idE\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" [disabled]=\"true\" name=\"email_idE\" id=\"email_idE\" [(ngModel)]=\"user.email_id\" required email #emailRef=\"ngModel\">\r\n                    <div *ngIf=\"emailRef.invalid && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"emailRef.errors.required\">\r\n                            *required\r\n                        </div>\r\n                        <div *ngIf=\"emailRef.errors.email\">\r\n                            *wrong email-id\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label\" for=\"phoneE\">Phone</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"phoneE\" id=\"phoneE\" [disabled]=\"!editMode\" [(ngModel)]=\"user.phone\" required minlength=\"10\" maxlength=\"10\" #phoneRef=\"ngModel\">\r\n                        <div *ngIf=\"phoneRef.invalid && (phoneRef.dirty || phoneRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"phoneRef.errors.required\">\r\n                                *required\r\n                            </div>\r\n                            <div *ngIf=\"phoneRef.errors.minlength\">\r\n                                Phone number must be 10 digit.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"genderE\">Gender</label>\r\n                        <select class=\"form-control\" id=\"genderE\" name=\"genderE\" [disabled]=\"!editMode\" [(ngModel)]=\"user.gender\" required #genderRef=\"ngModel\">\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"Female\">Female</option>\r\n                        </select>\r\n                        <div *ngIf=\"genderRef.invalid && (genderRef.dirty || genderRef.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"genderRef.errors.required\">\r\n                                    *required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n              <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-6\">\r\n                      <label class=\"control-label\" for=\"net_amtE\">Net amount</label>\r\n                      <input type=\"text\" class=\"form-control\" [disabled]=\"true\" name=\"net_amtE\" id=\"net_amtE\" [(ngModel)]=\"user.net_amount\">\r\n                  </div>\r\n                  <div class=\"form-group col-md-6\">\r\n                      <label class=\"control-label\" for=\"net_fundE\">Total funds</label>\r\n                      <input type=\"text\" class=\"form-control\" [disabled]=\"true\" name=\"net_fundE\" id=\"net_fundE\" [(ngModel)]=\"user.net_funds\">\r\n                  </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\"></label>\r\n                <div class=\"col-md-8\">\r\n                </div>\r\n              </div> -->\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../client/app/users/profile-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../client/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//declare function popSnackBar(): any;

var ProfileFormComponent = (function () {
    function ProfileFormComponent(_usersService, _router, _route, _snackBar) {
        var _this = this;
        this._usersService = _usersService;
        this._router = _router;
        this._route = _route;
        this._snackBar = _snackBar;
        console.log("Initializing edit-category-component constructor ...");
        this.user = {};
        this.user.name = {};
        // user edit
        this.editMode = false;
        this.editAlert = false;
        this.msg = "";
        // image src variables
        this.userImgSrcPrefix = "../../assets/images/user/";
        this.imgJPGExtension = "..jpg";
        this.imgPNGExtension = ".png";
        this._route.params.forEach(function (params) {
            _this.u_id = params['user_id'];
        });
        // auth guard
        if (!this._usersService.isAuthenticated()) {
            // not authenticated
            // display error message
            var msg = "Please login first";
            console.log(msg);
            this._snackBar.open(msg, "Authentication required..!!", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        else if (!this._usersService.isPrivilegeUser(this.u_id)) {
            var msg = "Not authorized user";
            console.log(msg);
            this._snackBar.open(msg, "", {
                duration: 5000
            });
            this._router.navigate(['']);
        }
        // get user info
        this._usersService.getUser(this.u_id)
            .subscribe(function (_user) {
            _this.user = _user;
        });
        console.log("Form Value = " + this.user);
    }
    ProfileFormComponent.prototype.editClicked = function () {
        this.editMode = true;
        this.editAlert = false;
    };
    ProfileFormComponent.prototype.onSaveChanges = function (formValue) {
        var _this = this;
        var updatedUser = {
            user_id: this.user.user_id,
            f_name: formValue.f_nameE,
            l_name: formValue.l_nameE,
            phone: formValue.phoneE,
            gender: formValue.genderE
        };
        this._usersService.updateUser(updatedUser)
            .subscribe(function (_success) {
            console.log("user request updated in db");
            _this.editAlert = true;
            _this.msg = "Updated " + _success.name + "'s profile";
            _this.editMode = false;
            //this._router.navigate(['']);
        }, function (err) {
            console.log("user request updated error");
            _this.editAlert = true;
            _this.msg = "Not modified. Error occured, verify the field values.";
            //this.msg = err.error +" "+ err.msg;
            //this._router.navigate(['']);
        });
    };
    ProfileFormComponent.prototype.resetValues = function () {
        var _this = this;
        this._usersService.getUser(this.u_id)
            .subscribe(function (_user) {
            _this.user = _user;
        });
        this.editMode = false;
        this.editAlert = false;
    };
    ProfileFormComponent.prototype.dismissAlert = function () {
        this.msg = "";
        this.editAlert = false;
    };
    ProfileFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-form',
            template: __webpack_require__("../../../../../client/app/users/profile-form.component.html"),
            styles: [__webpack_require__("../../../../../client/app/users/profile-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatSnackBar */]])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "../../../../../client/app/users/users.cookie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCookie; });
var UserCookie = (function () {
    function UserCookie() {
    }
    UserCookie.prototype.load = function () {
        if (localStorage.getItem('mf_uinfo') === null || localStorage.getItem('mf_uinfo') == undefined) {
            console.log("copying user info..");
            var mutual_fund_uinfo = {
                user_id: "",
                email_id: "",
                f_name: "UNKNOWN",
                l_name: "",
                phone: "",
                loggedin: "",
                auth: false,
                privilege: false
            };
            localStorage.setItem('mf_uinfo', JSON.stringify(mutual_fund_uinfo));
        }
        else {
            console.log("loaded user info from local storage..");
        }
    };
    return UserCookie;
}());



/***/ }),

/***/ "../../../../../client/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_cookie__ = __webpack_require__("../../../../../client/app/users/users.cookie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(_http, _router, _route, _snackBar) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._router = _router;
        _this._route = _route;
        _this._snackBar = _snackBar;
        console.log("Initializing Users service ...");
        _this.load();
        _this._userUrl = "https://mutual-fund-mart.herokuapp.com/api/users/";
        _this.user = {};
        return _this;
    }
    UsersService.prototype.isAuthenticated = function () {
        var ret = false;
        this.user = JSON.parse(localStorage.getItem('mf_uinfo'));
        if (!this.user.auth) {
            var msg = "Please login first, Authentication required!!";
            //console.log(msg);
            ret = false;
        }
        else
            ret = true;
        return ret;
    };
    // check for admin or normal user
    UsersService.prototype.isPrivilegeUser = function (user_id) {
        var ret = false;
        this.user = JSON.parse(localStorage.getItem('mf_uinfo'));
        if (this.user.privilege) {
            var msg = "Super User";
            //console.log(msg);
            ret = true;
        }
        else if (user_id) {
            if (user_id == this.user.user_id) {
                var msg = "Logged in as: " + this.user.f_name;
                //console.log(msg);
                ret = true;
            }
            else {
                var msg = "Trying unauthorized access";
                //console.log(msg);
                ret = false;
            }
        }
        else {
            var msg = "Normal/Anonymous user";
            //console.log(msg);
            ret = false;
        }
        return ret;
    };
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._userUrl)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (id) {
        return this._http.get(this._userUrl + id)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUserInfo = function () {
        this.user = JSON.parse(localStorage.getItem('mf_uinfo'));
        if (this.user.user_id == "")
            return false;
        else
            return this.user;
    };
    UsersService.prototype.addUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._userUrl + 'user_create', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (updatedUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._userUrl + updatedUser.user_id, JSON.stringify(updatedUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.togglePrivilege = function (togPrivilege) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._userUrl + "toggle_privilege", JSON.stringify(togPrivilege), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (user_id) {
        return this._http.delete(this._userUrl + user_id)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.login = function (uname, pwd) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._userUrl + 'login', { uname: uname, pwd: pwd }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addToCart = function (scheme) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._userUrl + "add_to_cart", JSON.stringify(scheme), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatSnackBar */]])
    ], UsersService);
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_3__users_cookie__["a" /* UserCookie */]));



/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
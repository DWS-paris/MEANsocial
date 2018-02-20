webpackJsonp(["module.1"],{

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"#\" (submit)=\"submitLogUser()\">\n\n  <fieldset>\n    <label for=\"userEmail\">Email <em><span>Champ obligatoire</span><span [ngClass]=\"{'open': errorMsg.invalidUser}\">Utilisateur inconnu</span></em></label>\n    <input type=\"text\" id=\"userEmail\" (focus)=\"errorMsg.email = false; errorMsg.invalidUser = false\" [(ngModel)]=\"userLoginObject.email\" name=\"email\">\n\n    <label for=\"userPassword\">Mot de passe <em><span [ngClass]=\"{'open': errorMsg.password}\">Champ obligatoire</span><span [ngClass]=\"{'open': errorMsg.invalidPassword}\">Mot de passe non valide</span></em></label>\n    <input type=\"password\" id=\"userPassword\" (focus)=\"errorMsg.password = false; errorMsg.invalidPassword = false\" [(ngModel)]=\"userLoginObject.password\" name=\"password\">\n\n    <button type=\"submit\">Connexion</button>\n  </fieldset>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Configuration du composants
*/
// Import des interfaces


// Import des modules

// Définition du composant
var LoginComponent = (function () {
    // Configuration du constructeur
    function LoginComponent(myService, router) {
        this.myService = myService;
        this.router = router;
        // Définition des variables
        this.userLoginObject = { email: null, password: null };
        this.errorMsg = { errors: 0, email: false, password: false, invalidUser: false, invalidPassword: false };
    }
    ;
    // Création d'une fonction pour connecter l'utilisateur
    LoginComponent.prototype.submitLogUser = function () {
        var _this = this;
        // Vider les erreurs
        this.errorMsg.errors = 0;
        // Vérification des informations saisies
        if (this.userLoginObject.email == null || this.userLoginObject.email.length == 0) {
            // Email manquant
            this.errorMsg.email = true;
            this.errorMsg.errors++;
        }
        if (this.userLoginObject.password == null || this.userLoginObject.password.length == 0) {
            // Password manquant
            this.errorMsg.password = true;
            this.errorMsg.errors++;
        }
        if (this.errorMsg.errors === 0) {
            // => Formulaire validé
            this.myService.userLogin(this.userLoginObject).then(function (user) {
                localStorage.setItem('DWStoken', user.token);
                _this.router.navigateByUrl('/dashboard');
            }).catch(function (error) {
                if (error.status === 404) {
                    // Utilisateur inconnu
                    _this.errorMsg.invalidUser = true;
                }
                else if (error.status === 401) {
                    // Mot de passe invalide
                    _this.errorMsg.invalidPassword = true;
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]]
        })
        // 
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());

//  


/***/ }),

/***/ "../../../../../src/app/components/login/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route__ = __webpack_require__("../../../../../src/app/components/login/route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Configuration du composants
*/
// Import des interfaces



// Importer les composants


// Définition du module
var LoginModule = (function () {
    //
    /*
    Export du module
    */
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__route__["a" /* Routing */]]
        })
        //
        /*
        Export du module
        */
    ], LoginModule);
    return LoginModule;
}());

;
//  


/***/ }),

/***/ "../../../../../src/app/components/login/route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");

// Importer les composants à utiliser dans les routes

// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */]
    }
];
// Exporter une autre constante pour utiliser les routes
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes);


/***/ })

});
//# sourceMappingURL=module.1.chunk.js.map
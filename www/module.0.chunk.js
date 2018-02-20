webpackJsonp(["module.0"],{

/***/ "../../../../../src/app/components/register/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route__ = __webpack_require__("../../../../../src/app/components/register/route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Importer les composants


var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__register_component__["a" /* RegisterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_4__route__["a" /* Routing */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]]
        })
    ], RegisterModule);
    return RegisterModule;
}());

;


/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"#\" (submit)=\"submitRegisterUser()\">\n\n    <fieldset>\n      <label for=\"userFirstName\">Prénom <em><span [ngClass]=\"{'open': errorMsg.firstName}\">Champ obligatoire</span></em></label>\n      <input type=\"text\" id=\"userFirstName\" (focus)=\"errorMsg.firstName = false\" [(ngModel)]=\"userRegisterObject.firstName\" name=\"name\">\n\n      <label for=\"userLastName\">Nom <em><span [ngClass]=\"{'open': errorMsg.lastName}\">Champ obligatoire</span></em></label>\n      <input type=\"text\" id=\"userLastName\" (focus)=\"errorMsg.lastName = false\" [(ngModel)]=\"userRegisterObject.lastName\" name=\"name\">\n      \n      <label for=\"userEmail\">Email <em><span [ngClass]=\"{'open': errorMsg.email}\">Champ obligatoire</span></em></label>\n      <input type=\"text\" id=\"userEmail\" (focus)=\"errorMsg.email = false; errorMsg.invalidUser = false\" [(ngModel)]=\"userRegisterObject.email\" name=\"email\">\n  \n      <label for=\"userPassword\">Mot de passe <em><span [ngClass]=\"{'open': errorMsg.password}\">Champ obligatoire</span></em></label>\n      <input type=\"password\" id=\"userPassword\" (focus)=\"errorMsg.password = false\" [(ngModel)]=\"userRegisterObject.password\" name=\"password\">\n\n      <label for=\"userRepeatePassword\">Répéter le mot de passe <em><span [ngClass]=\"{'open': errorMsg.repeatePassword}\">Champ obligatoire</span></em></label>\n      <input type=\"password\" id=\"userRepeatePassword\" (focus)=\"errorMsg.repeatePassword = false\" [(ngModel)]=\"userRegisterObject.repeatePassword\" name=\"repeatePassword\">\n\n      <label for=\"userBio\">A propos de vous</label>\n      <textarea id=\"userBio\" [(ngModel)]=\"userRegisterObject.bio\" name=\"dio\"></textarea>\n\n      <label for=\"userLinkedin\">Profil Linkedin</label>\n      <input type=\"text\" id=\"userLinkedin\" [(ngModel)]=\"userRegisterObject.linkedin\" name=\"linkedin\">\n\n      <label for=\"userTwitter\">Profil twitter</label>\n      <input type=\"text\" id=\"userTwitter\" [(ngModel)]=\"userRegisterObject.twitter\" name=\"twitter\">\n\n      <label for=\"userFacebook\">Profil Facebook</label>\n      <input type=\"text\" id=\"userFacebook\" [(ngModel)]=\"userRegisterObject.facebook\" name=\"facebook\">\n  \n      <button type=\"submit\">Connexion</button>\n    </fieldset>\n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
var RegisterComponent = (function () {
    // Configuration du constructeur
    function RegisterComponent(myService, router) {
        this.myService = myService;
        this.router = router;
        // Définition des variables
        this.userRegisterObject = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            repeatePassword: null
        };
        this.errorMsg = {
            errors: 0,
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            repeatePassword: false
        };
    }
    ;
    // Création d'une fonction pour enregistrer l'utilisateur
    RegisterComponent.prototype.submitRegisterUser = function () {
        var _this = this;
        // Vider les erreurs
        this.errorMsg.errors = 0;
        // Vérification des informations saisies
        if (this.userRegisterObject.firstName == null || this.userRegisterObject.firstName.length == 0) {
            // Prénom manquant
            this.errorMsg.firstName = true;
            this.errorMsg.errors++;
        }
        if (this.userRegisterObject.lastName == null || this.userRegisterObject.lastName.length == 0) {
            // Nom manquant
            this.errorMsg.lastName = true;
            this.errorMsg.errors++;
        }
        if (this.userRegisterObject.email == null || this.userRegisterObject.email.length == 0) {
            // Email manquant
            this.errorMsg.email = true;
            this.errorMsg.errors++;
        }
        if (this.userRegisterObject.password == null || this.userRegisterObject.password.length == 0) {
            // Password manquant
            this.errorMsg.password = true;
            this.errorMsg.errors++;
        }
        if (this.userRegisterObject.repeatePassword == null || this.userRegisterObject.repeatePassword.length == 0) {
            // repeatePassword manquant
            this.errorMsg.repeatePassword = true;
            this.errorMsg.errors++;
        }
        if (this.errorMsg.errors === 0) {
            // => Formulaire validé
            this.myService.userRegister(this.userRegisterObject).then(function (user) {
                localStorage.setItem('DWStoken', user.token);
                _this.router.navigateByUrl('/dashboard');
            }).catch(function (error) {
                console.error(error);
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    ;
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]]
        })
        // 
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

;
//  


/***/ }),

/***/ "../../../../../src/app/components/register/route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");

// Importer les composants à utiliser dans les routes

// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */]
    }
];
// Exporter une autre constante pour utiliser les routes
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes);


/***/ })

});
//# sourceMappingURL=module.0.chunk.js.map
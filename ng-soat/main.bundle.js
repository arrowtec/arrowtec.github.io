webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-root {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nsoat-toolbar {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.mainImage{\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/home.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.mainIcon{\r\n    font-size: 4rem;\r\n    width: 4rem !important;\r\n    height: 4rem !important;\r\n    margin-right: .5rem;\r\n}\r\n\r\n.mainSection{\r\n  margin: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<soat-toolbar></soat-toolbar>\r\n<div style=\"height: 48px;\" fxHide fxShow.xs=\"true\"></div>\r\n<div class=\"mainContainer\">\r\n    <div fxLayout=\"row\" class=\"mainImage\">\r\n        <div fxLayout=\"column\" fxFlex=\"50%\" fxHide.sm=\"true\" fxHide.xs=\"true\">\r\n            <h1 class=\"mainTitle\">COMPRA TU SOAT</h1>\r\n            <h2 class=\"mainSubTitle\">Fácil, rápido y seguro</h2>\r\n        </div>\r\n        <div fxLayout=\"column\" fxFlex=\"50%\" fxFlex.xs=\"100%\" fxFlex.sm=\"100%\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n        <div fxLayout=\"row\" fxLayout.sm=\"column\" class=\"mainSection\" *ngFor=\"let section of sections\">\r\n            <div fxLayout=\"column\" fxLayout.sm=\"row\" fxLayoutAlign=\"center\">\r\n                <md-icon class=\"mainIcon primaryColor\">{{section.icon}}</md-icon>\r\n            </div>\r\n            <div>\r\n                <h3 class=\"accentColor\" fxLayoutAlign.sm=\"center\">{{section.title}}</h3>\r\n                <p>\r\n                    {{section.text}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <soat-footer></soat-footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.sections = [
            {
                title: 'COMPARA',
                icon: 'sentiment_very_satisfied',
                text: 'Sabes que las nuevas tendecias del mercado son en linea, vamos compra tu SOAT en unos cuantos pasos.'
            },
            {
                title: 'ASEGURA',
                icon: 'headset_mic',
                text: 'Este metodo de compra en linea es 100% seguro, y te enviaremos los datos de tu compra a donde sea que tu quieras.'
            },
            {
                title: 'AHORRA',
                icon: 'redeem',
                text: 'Comprando tu soat en linea ahorra tiempo e inviertelo con tu familia, en la comdidad de tu hogar o donde quiera que te encuentres.'
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_pages_mail_mail_component__ = __webpack_require__("../../../../../src/app/pages/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_pages_purchase_purchase_component__ = __webpack_require__("../../../../../src/app/pages/purchase/purchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_pages_validity_validity_component__ = __webpack_require__("../../../../../src/app/pages/validity/validity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_pages_car_info_car_info_component__ = __webpack_require__("../../../../../src/app/pages/car-info/car-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_pages_search_person_search_person_component__ = __webpack_require__("../../../../../src/app/pages/search-person/search-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_person_info_component__ = __webpack_require__("../../../../../src/app/pages/person-info/person-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_pages_coverage_coverage_component__ = __webpack_require__("../../../../../src/app/pages/coverage/coverage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8_app_pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'vehiculo/:placa', component: __WEBPACK_IMPORTED_MODULE_14_app_pages_car_info_car_info_component__["a" /* CarInfoComponent */] },
    { path: 'buscar-persona', component: __WEBPACK_IMPORTED_MODULE_15_app_pages_search_person_search_person_component__["a" /* SearchPersonComponent */] },
    { path: 'persona', component: __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_person_info_component__["a" /* PersonInfoComponent */] },
    { path: 'cobertura', component: __WEBPACK_IMPORTED_MODULE_17_app_pages_coverage_coverage_component__["a" /* CoverageComponent */] },
    { path: 'mail', component: __WEBPACK_IMPORTED_MODULE_10_app_pages_mail_mail_component__["a" /* MailComponent */] },
    { path: 'vigencia', component: __WEBPACK_IMPORTED_MODULE_13_app_pages_validity_validity_component__["a" /* ValidityComponent */] },
    { path: 'pagar', component: __WEBPACK_IMPORTED_MODULE_11_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_12_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9_app_pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/car-info/car-info.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>directions_car</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Datos del vehículo : {{placa}}</md-card-title>\r\n        <md-card-subtitle>Verifica y completa los datos de tu vehículo.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n\r\n        <form>\r\n            <div fxLayout=\"column\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                    <md-select placeholder=\"Marca\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let marca of marcas\" [value]=\"marca.value\">\r\n                            {{marca.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                    <md-select placeholder=\"Modelo\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let modelo of modelos\" [value]=\"modelo.value\">\r\n                            {{modelo.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <md-select placeholder=\"Tipo\">\r\n                    <md-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.value\">\r\n                        {{tipo.label}}\r\n                    </md-option>\r\n                </md-select>\r\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <input mdInput placeholder=\"Año\" type=\"number\">\r\n                    </md-input-container>\r\n                    <md-select placeholder=\"Uso\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let uso of usos\" [value]=\"uso.value\">\r\n                            {{uso.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <md-select placeholder=\"Región\">\r\n                    <md-option *ngFor=\"let region of regiones\" [value]=\"region.value\">\r\n                        {{region.label}}\r\n                    </md-option>\r\n                </md-select>\r\n            </div>\r\n        </form>\r\n\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 50px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/buscar-persona\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/car-info/car-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarInfoComponent = (function () {
    function CarInfoComponent(route) {
        this.route = route;
        this.marcas = [
            { value: 'Toyota', label: 'Toyota' },
            { value: 'Kia', label: 'Kia' },
            { value: 'Hyundai', label: 'Hyundai' }
        ];
        this.modelos = [
            { value: 'Corolla', label: 'Corolla' },
            { value: 'Cerato', label: 'Cerato' },
            { value: 'Elantra', label: 'Elantra' }
        ];
        this.tipos = [
            { value: 'Automovil', label: 'Automovil' },
            { value: 'Camioneta', label: 'Camioneta' },
            { value: 'Furgoneta', label: 'Furgoneta' }
        ];
        this.usos = [
            { value: 'Particular', label: 'Particular' },
            { value: 'Taxi', label: 'Taxi' },
            { value: 'Carga', label: 'Carga' }
        ];
        this.regiones = [
            { value: 'Lima', label: 'Lima' },
            { value: 'Arequipa', label: 'Arequipa' }
        ];
    }
    CarInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return params.get('placa'); })
            .subscribe(function (placa) {
            _this.placa = (_this.placa || '') + placa;
        });
    };
    return CarInfoComponent;
}());
CarInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'car-info',
        template: __webpack_require__("../../../../../src/app/pages/car-info/car-info.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], CarInfoComponent);

var _a;
//# sourceMappingURL=car-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confirm/confirm-document.component.html":
/***/ (function(module, exports) {

module.exports = "<object data=\"assets/docs/SOAT_ELECTRONICO.pdf\" width=\"400px\" height=\"500px\" type='application/pdf'>\r\n   <a href=\"assets/docs/SOAT_ELECTRONICO.pdf\" target=\"_blank\">Descarga tu documento</a>\r\n </object>"

/***/ }),

/***/ "../../../../../src/app/pages/confirm/confirm-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDocumentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDocumentComponent = (function () {
    function ConfirmDocumentComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDocumentComponent.prototype.ngOnInit = function () { };
    return ConfirmDocumentComponent;
}());
ConfirmDocumentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'confirm-document',
        template: __webpack_require__("../../../../../src/app/pages/confirm/confirm-document.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDocumentComponent);

var _a;
//# sourceMappingURL=confirm-document.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>thumb_up</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Confirmación</md-card-title>\r\n        <md-card-subtitle>Tu compra se realizó con éxito!. </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n\r\n        <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxLayoutAlign=\"center\">\r\n                <h3>\r\n                    Recibirás tu certificado SOAT, comprobante de pago y codigo de verificación en tu correo electrónico jperez@nomail.com\r\n                </h3>\r\n            </div>\r\n            <div fxLayoutAlign=\"center\">\r\n                <button class=\"soat-button\" color=\"accent\" md-raised-button (click)=\"viewDocument()\">Ver Póliza</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 100px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/\">Ok</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_confirm_confirm_document_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm-document.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmComponent = (function () {
    function ConfirmComponent(dialog) {
        this.dialog = dialog;
    }
    ConfirmComponent.prototype.ngOnInit = function () { };
    ConfirmComponent.prototype.viewDocument = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */]);
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'confirm',
        template: __webpack_require__("../../../../../src/app/pages/confirm/confirm.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */]) === "function" && _a || Object])
], ConfirmComponent);

var _a;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td{\r\n    font-size: .9em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-title class=\"primaryColor\">\r\n    Políticas sobre Uso de Plataformas de Ventas y envío del SOAT Digital por medios electrónicos\r\n</div>\r\n<div md-dialog-content>\r\n    <p>\r\n        Aceptación de los lineamientos del uso de nuestra plataforma de ventas por medios electrónicos Declaro y acepto que no usaré\r\n        esta plataforma de manera inadecuada contraviniendo los principios de la buena fe en la contratación. Asimismo, acepto\r\n        y reconozco que la presente plataforma está diseñada para la contratación del SOAT Digital a través de medios electrónicos,\r\n        por lo que, solo podré utilizarla en calidad de Contratante del producto objeto de adquisición y no por actos de\r\n        terceras personas y/o con fines diferentes a la contratación de una Póliza de Seguro. De la misma manera, acepto\r\n        que no interferiré ni alteraré el servicio que brinda GLOBALTPA, incluyendo la comercialización de los productos\r\n        por este canal, ni intentaré acceder a ellos usando un método distinto a las instrucciones proporcionadas por GLOBALTPA.\r\n        Acepto que solo podré usar la plataforma en la medida en que la ley lo permita, por lo que, declaro bajo juramento,\r\n        en mi calidad de Contratante, ser mayor de edad y contar con interés asegurable para la adquisición del SOAT Digital.\r\n        Asimismo, acepto expresamente que GLOBALTPA está plenamente facultada para suspender o cancelar el uso de esta plataforma,\r\n        por ende, la contratación del SOAT Digital, siempre que mi persona no haya cumplido con las políticas aquí expuestas\r\n        o si GLOBALTPA considera que mi conducta puede ser de mala fe en la contratación. Declaro conocer que el uso de la\r\n        plataforma no me convierte en titular de ninguno de los derechos de propiedad intelectual, ni del contenido al que\r\n        acceda, ni me otorga el derecho a usar las marcas ni los logotipos utilizados por GLOBALTPA, por lo cual, reconozco\r\n        expresamente que el titular de aquellos derechos es y será GLOBALTPA. Finalmente, me obligo a no eliminar, ocultar\r\n        ni alterar los avisos legales que se muestren en la plataforma de ventas por medios electrónicos de GLOBALTPA. Asimismo,\r\n        con esta aceptación confirmo la exactitud y veracidad de mis declaraciones expresadas en la presente plataforma,\r\n        indicando que cualquier declaración inexacta y/o reticente donde medie dolo o culpa inexcusable, respecto de circunstancias\r\n        conocidas por mi persona, y que hubiesen impedido la emisión de este SOAT Digital o modificado sus condiciones si\r\n        GLOBALTPA hubiese sido informada del verdadero estado del riesgo, hará que se proceda a la nulidad del mismo, o a\r\n        repetir contra el Contratante, el gasto incurrido por GLOBALTPA como consecuencia del otorgamiento de las coberturas\r\n        del SOAT Digital, en caso de siniestro. Finalmente, declaro conocer que la forma de envío del SOAT Digital es por\r\n        medios virtuales, y que será remitido a al correo electrónico que he consignado en el proceso de compra. Asimismo,\r\n        otorgo mi consentimiento para que las comunicaciones relacionadas al SOAT Digital, puedan ser remitidas a la misma\r\n        dirección de correo electrónico.\r\n    </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverageDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoverageDetailComponent = (function () {
    function CoverageDetailComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return CoverageDetailComponent;
}());
CoverageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'coverage-detail',
        template: __webpack_require__("../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], CoverageDetailComponent);

var _a;
//# sourceMappingURL=coverage-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/coverage/coverage.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>new_releases</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Cobertura</md-card-title>\r\n        <md-card-subtitle>Te ofrecemos la mejor cobertura del mercado.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <md-card class=\"mat-elevation-z5\">\r\n\r\n            <md-card-content>\r\n                <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutGap.xs=\"10px\" fxLayout.xs=\"column\">\r\n                    <div fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"60%\">\r\n                        <img fxLayoutAlign=\"center\" fxFlex=\"150px\" fxFlex.xs=\"90px\" src=\"http://www.generaccion.com/noticia/imagenes/grandes/204978-23_10_2015_14_57_58_1037038184.jpg\"\r\n                            alt=\"logo_cobertura\">\r\n                        <span fxLayoutAlign=\"center\">Prima anual</span>\r\n                        <span fxLayoutAlign=\"center\" style=\"font-size:2em;font-weight: bold;\">S/. 85.00</span>\r\n                        <span fxLayoutAlign=\"center\">(incluido IGV)</span>\r\n                    </div>\r\n                    <md-list>\r\n                        <md-list-item *ngFor=\"let cobertura of coberturas\">\r\n                            <md-icon class=\"accentColor\" md-list-icon>check</md-icon>\r\n                            <h5 md-line class=\"accentColor\">{{cobertura.nombre}}</h5>\r\n                            <p md-line> {{cobertura.valor}} </p>\r\n                        </md-list-item>\r\n                    </md-list>\r\n                </div>\r\n\r\n\r\n            </md-card-content>\r\n            <md-card-actions>\r\n                <button md-button>\r\n                    <md-icon>info</md-icon>\r\n                    Detalles\r\n                </button>\r\n            </md-card-actions>\r\n        </md-card>\r\n        <div style=\"margin-top:20px;\">\r\n            <md-checkbox></md-checkbox>\r\n            Declaro haber leído y acepto las\r\n            <a class=\"primaryColor\" style=\"cursor: pointer;\" (click)=\"viewPolicies()\">\r\n            Políticas sobre uso de plataformas de ventas y envío del SOAT Digital por medios electrónicos.\r\n            </a>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/mail\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/coverage/coverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_coverage_coverage_detail_coverage_detail_component__ = __webpack_require__("../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoverageComponent = (function () {
    function CoverageComponent(dialog) {
        this.dialog = dialog;
        this.coberturas = [
            { nombre: 'Muerte accidental', valor: 'Hasta 4 UIT' },
            { nombre: 'Invalidez permanente', valor: 'Hasta 1 UIT' },
            { nombre: 'Incapacidad temporal', valor: 'Hasta 5 UIT' }
        ];
    }
    CoverageComponent.prototype.ngOnInit = function () {
    };
    CoverageComponent.prototype.viewPolicies = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2_app_pages_coverage_coverage_detail_coverage_detail_component__["a" /* CoverageDetailComponent */]);
    };
    return CoverageComponent;
}());
CoverageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'coverage',
        template: __webpack_require__("../../../../../src/app/pages/coverage/coverage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */]) === "function" && _a || Object])
], CoverageComponent);

var _a;
//# sourceMappingURL=coverage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-content>\r\n        <h1 class=\"homeTitle\">\r\n            <md-icon>directions_car</md-icon>\r\n            SOAT en línea\r\n        </h1>\r\n        <h2 class=\"homeSubTitle\">Tu mejor opción a la hora de comprar tu SOAT con total seguridad.</h2>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"30px\">\r\n            <form>\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>directions_car</md-icon>\r\n                        <input mdInput placeholder=\"Ingresa la placa de tu vehículo\" [(ngModel)]=\"placa\" name=\"placa\">\r\n                    </md-input-container>\r\n                </div>\r\n            </form>\r\n            <div fxLayoutAlign=\"center\">\r\n                <button class=\"soat-button main-button\" color=\"primary\" md-raised-button (click)=\"search()\">Continuar</button>\r\n            </div>\r\n        </div>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 60px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeSubTitle {\n  text-align: center;\n  margin: 5px  20px 20px 20px;\n  font-weight: 100; }\n\n.homeTitle {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.placa = 'C8V917';
    };
    HomeComponent.prototype.search = function () {
        this.router.navigate(['/vehiculo', this.placa]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>mail</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Ingresa tu correo electrónico</md-card-title>\r\n        <md-card-subtitle>Enviaremos tu comprobante de pago y tu certificado SOAT a tu correo electrónico</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Correo electrónico\" type=\"email\">\r\n                    <md-error>Ingresa un correo electrónico válido</md-error>\r\n                </md-input-container>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 190px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/vigencia\">CONFIRMAR</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailComponent = (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () { };
    return MailComponent;
}());
MailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'mail',
        template: __webpack_require__("../../../../../src/app/pages/mail/mail.component.html")
    }),
    __metadata("design:paramtypes", [])
], MailComponent);

//# sourceMappingURL=mail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_pages_mail_mail_component__ = __webpack_require__("../../../../../src/app/pages/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_pages_purchase_purchase_component__ = __webpack_require__("../../../../../src/app/pages/purchase/purchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_pages_confirm_confirm_document_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_pages_validity_validity_component__ = __webpack_require__("../../../../../src/app/pages/validity/validity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_pages_car_info_car_info_component__ = __webpack_require__("../../../../../src/app/pages/car-info/car-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_pages_search_person_search_person_component__ = __webpack_require__("../../../../../src/app/pages/search-person/search-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_pages_person_info_person_info_component__ = __webpack_require__("../../../../../src/app/pages/person-info/person-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_policies_policies_component__ = __webpack_require__("../../../../../src/app/pages/person-info/policies/policies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_pages_coverage_coverage_component__ = __webpack_require__("../../../../../src/app/pages/coverage/coverage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_pages_coverage_coverage_detail_coverage_detail_component__ = __webpack_require__("../../../../../src/app/pages/coverage/coverage-detail/coverage-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdListModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7_app_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_pages_car_info_car_info_component__["a" /* CarInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_pages_search_person_search_person_component__["a" /* SearchPersonComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_pages_person_info_person_info_component__["a" /* PersonInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_policies_policies_component__["a" /* PoliciesComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_pages_coverage_coverage_component__["a" /* CoverageComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_pages_coverage_coverage_detail_coverage_detail_component__["a" /* CoverageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_pages_mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_pages_validity_validity_component__["a" /* ValidityComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7_app_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_pages_car_info_car_info_component__["a" /* CarInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_pages_search_person_search_person_component__["a" /* SearchPersonComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_pages_person_info_person_info_component__["a" /* PersonInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_policies_policies_component__["a" /* PoliciesComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_pages_coverage_coverage_component__["a" /* CoverageComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_pages_coverage_coverage_detail_coverage_detail_component__["a" /* CoverageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_pages_mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_pages_validity_validity_component__["a" /* ValidityComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18_app_pages_coverage_coverage_detail_coverage_detail_component__["a" /* CoverageDetailComponent */], __WEBPACK_IMPORTED_MODULE_11_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */], __WEBPACK_IMPORTED_MODULE_16_app_pages_person_info_policies_policies_component__["a" /* PoliciesComponent */]],
        providers: [],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/person-info/person-info.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>face</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Datos del contratante</md-card-title>\r\n        <md-card-subtitle>Verifica y completa tus datos.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n\r\n        <form>\r\n            <div fxLayout=\"column\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\">\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput placeholder=\"Nombres\">\r\n                </md-input-container>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <input mdInput placeholder=\"Apellido Paterno\">\r\n                    </md-input-container>\r\n                    <md-input-container class=\"full-width\">\r\n                        <input mdInput placeholder=\"Apellido Materno\">\r\n                    </md-input-container>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <input mdInput placeholder=\"Dirección\">\r\n                    </md-input-container>\r\n                    <md-select placeholder=\"Departamento\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento.value\">\r\n                            {{departamento.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                    <md-select placeholder=\"Provincia\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let provincia of provincias\" [value]=\"provincia.value\">\r\n                            {{provincia.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                    <md-select placeholder=\"Distrito\" class=\"full-width\">\r\n                        <md-option *ngFor=\"let distrito of distritos\" [value]=\"distrito.value\">\r\n                            {{distrito.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput placeholder=\"Correo electrónico\" type=\"email\">\r\n                </md-input-container>\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput placeholder=\"Celular\" type=\"number\">\r\n                </md-input-container>\r\n                <div>\r\n                    <md-checkbox></md-checkbox>\r\n                    Declaro haber leído y acepto las\r\n                    <a class=\"primaryColor\" style=\"cursor: pointer;\" (click)=\"viewPolicies()\">Políticas sobre la protección de datos personales</a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/cobertura\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/person-info/person-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_pages_person_info_shared_person_query__ = __webpack_require__("../../../../../src/app/pages/person-info/shared/person-query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_pages_person_info_policies_policies_component__ = __webpack_require__("../../../../../src/app/pages/person-info/policies/policies.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonInfoComponent = (function () {
    function PersonInfoComponent(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.departamentos = [
            { value: 'Lima', label: 'Lima' },
            { value: 'Arequipa', label: 'Arequipa' },
            { value: 'La Libertad', label: 'La Libertad' }
        ];
        this.provincias = [
            { value: 'Lima', label: 'Lima' },
            { value: 'Barranca', label: 'Barranca' },
            { value: 'Cajatambo', label: 'Cajatambo' }
        ];
        this.distritos = [
            { value: 'Lima', label: 'Lima' },
            { value: 'Miraflores', label: 'Miraflores' },
            { value: 'San Isidro', label: 'San Isidro' }
        ];
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap
            .subscribe(function (param) {
            var tipoDoc = param.get('tipo_documento');
            var doc = param.get('documento');
            _this.query = _this.getPersonQuery(tipoDoc, doc);
        });
    };
    PersonInfoComponent.prototype.getPersonQuery = function (tipoDoc, doc) {
        var personQuery = new __WEBPACK_IMPORTED_MODULE_4_app_pages_person_info_shared_person_query__["a" /* PersonQuery */]();
        personQuery.numeroDocumento = doc;
        personQuery.tipoDocumento = tipoDoc;
        return personQuery;
    };
    PersonInfoComponent.prototype.viewPolicies = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5_app_pages_person_info_policies_policies_component__["a" /* PoliciesComponent */]);
    };
    return PersonInfoComponent;
}());
PersonInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'person-info',
        template: __webpack_require__("../../../../../src/app/pages/person-info/person-info.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */]) === "function" && _b || Object])
], PersonInfoComponent);

var _a, _b;
//# sourceMappingURL=person-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/person-info/policies/policies.component.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-title class=\"primaryColor\">\r\n    Ley 29733 - Ley de Protección de Datos Personales y su Reglamento:\r\n</div>\r\n<div md-dialog-content>\r\n    <p>\r\n        De conformidad con lo establecido en la Ley N° 29733 - Ley de Protección de Datos Personales y su Reglamento, quien autoriza\r\n        el presente documento, queda informado y da su consentimiento libre, previo, expreso, inequívoco e informado, para\r\n        el tratamiento y transferencia, nacional e internacional de sus datos personales al banco de datos de titularidad\r\n        de GLOBALTPA que estará ubicado en sus oficinas a nivel nacional que, conjuntamente con cualquier otro dato que pudiera\r\n        facilitarse a lo largo de la relación jurídica y aquellos obtenidos en fuentes accesibles al público, se tratarán\r\n        con las finalidades de analizar las circunstancias al celebrar contratos con GLOBALTPA, gestionar la contratación\r\n        y evaluar la calidad del servicio. Asimismo, GLOBALTPA utilizará los datos personales con fines comerciales, y publicitarios\r\n        a fin de remitir información sobre productos y servicios que considere de su interés. Los datos proporcionados serán\r\n        incorporados, con las mismas finalidades, a las bases de datos de GLOBALTPA y/u otras empresas subsidiarias, filiales,\r\n        asociadas, afiliadas o miembros del Grupo Económico al cual pertenece y/o terceros con los que éstas mantengan una\r\n        relación contractual. Los datos suministrados son esenciales para las finalidades indicadas. Las bases de datos donde\r\n        ellos se almacenan cuentan con estrictas medidas de seguridad. En caso se decida no proporcionarlos, no será posible\r\n        la prestación de servicios por parte de GLOBALTPA. Conforme a Ley, el titular de la información está facultado a\r\n        ejercitar los derechos de información, acceso, rectificación, supresión o cancelación y oposición que se detallan\r\n        en la Ley N° 29733 - Ley de Protección de Datos Personales y su Reglamento, mediante comunicación dirigida de GLOBALTPA.\r\n    </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/person-info/policies/policies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliciesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoliciesComponent = (function () {
    function PoliciesComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PoliciesComponent.prototype.ngOnInit = function () { };
    return PoliciesComponent;
}());
PoliciesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'policies',
        template: __webpack_require__("../../../../../src/app/pages/person-info/policies/policies.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], PoliciesComponent);

var _a;
//# sourceMappingURL=policies.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/person-info/shared/person-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonQuery; });
var PersonQuery = (function () {
    function PersonQuery() {
    }
    return PersonQuery;
}());

//# sourceMappingURL=person-query.js.map

/***/ }),

/***/ "../../../../../src/app/pages/purchase/purchase.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>local_atm</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Pagar</md-card-title>\r\n        <md-card-subtitle>Ingresa la siguiente nformación para realizar el pago de tu SOAT.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>credit_card</md-icon>\r\n                        <input mdInput placeholder=\"Tarjeta de Crédito o Débito\" type=\"number\">\r\n                    </md-input-container>\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>today</md-icon>\r\n                        <input mdInput placeholder=\"Fecha de expiración (mes/año)\" pattern=\"/[\\d]{2} \\/ [\\d]{4}/\">\r\n                    </md-input-container>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>security</md-icon>\r\n                        <input mdInput placeholder=\"Código de seguridad\" type=\"number\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>face</md-icon>\r\n                        <input mdInput placeholder=\"Nombre del Titular\">\r\n                    </md-input-container>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 100px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/confirm\">Pagar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/purchase/purchase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseComponent = (function () {
    function PurchaseComponent() {
    }
    PurchaseComponent.prototype.ngOnInit = function () { };
    return PurchaseComponent;
}());
PurchaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'purchase',
        template: __webpack_require__("../../../../../src/app/pages/purchase/purchase.component.html")
    }),
    __metadata("design:paramtypes", [])
], PurchaseComponent);

//# sourceMappingURL=purchase.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/search-person/search-person.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>face</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Ingresa tu tipo y número de documento</md-card-title>\r\n        <md-card-subtitle>Buscaremos tus datos de acuerdo al tipo y número de documento. </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\">\r\n                <md-select placeholder=\"Tipo de documento\" class=\"full-width\" [(ngModel)]=\"tipoDocumento\" name=\"tipoDocumento\">\r\n                    <md-option *ngFor=\"let tipodoc of tipodocs\" [value]=\"tipodoc.value\">\r\n                        {{tipodoc.label}}\r\n                    </md-option>\r\n                </md-select>\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput placeholder=\"Número de documento\" [(ngModel)]=\"numeroDocumento\" name=\"numeroDocumento\" type=\"number\">\r\n                </md-input-container>\r\n            </div>\r\n        </form>\r\n\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 100px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button (click)=\"search()\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/search-person/search-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPersonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPersonComponent = (function () {
    function SearchPersonComponent(router) {
        this.router = router;
        this.tipodocs = [
            { label: 'DNI', value: 'dni' },
            { label: 'RUC', value: 'ruc' }
        ];
    }
    SearchPersonComponent.prototype.ngOnInit = function () {
    };
    SearchPersonComponent.prototype.search = function () {
        this.router
            .navigate(['/persona'], {
            queryParams: {
                tipo_documento: this.tipoDocumento,
                documento: this.numeroDocumento
            }
        });
    };
    return SearchPersonComponent;
}());
SearchPersonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'search-person',
        template: __webpack_require__("../../../../../src/app/pages/search-person/search-person.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SearchPersonComponent);

var _a;
//# sourceMappingURL=search-person.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/validity/validity.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>today</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Inicio de vigencia</md-card-title>\r\n        <md-card-subtitle>Selecciona la fecha de inicio de vigencia. El último SOAT activo que tenemos registrado vence el 31/01/2017</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <md-input-container class=\"full-width\">\r\n                    <md-icon mdPrefix>today</md-icon>\r\n                    <input mdInput [mdDatepicker]=\"picker\" (focus)=\"picker.open()\" placeholder=\"Fecha de expiración\">\r\n                </md-input-container>\r\n                <md-datepicker #picker touchUi=\"true\"></md-datepicker>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 170px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/pagar\">CONFIRMAR</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/validity/validity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidityComponent = (function () {
    function ValidityComponent() {
    }
    ValidityComponent.prototype.ngOnInit = function () { };
    return ValidityComponent;
}());
ValidityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'validity',
        template: __webpack_require__("../../../../../src/app/pages/validity/validity.component.html")
    }),
    __metadata("design:paramtypes", [])
], ValidityComponent);

//# sourceMappingURL=validity.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"soat-footer\">\r\n    <div class=\"soat-footer-list\">\r\n        <div class=\"footer-logo\">\r\n            LOGO\r\n        </div>\r\n\r\n        <div class=\"soat-footer-links\">\r\n            <ul>\r\n                <li> LINK </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"soat-footer-copyright\">\r\n            <p>Powered by ARROW ©2017. Code licensed under an MIT-style License. Documentation licensed under CC BY 4.0.</p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".soat-footer {\n  margin-top: 40px;\n  padding: 12px;\n  font-size: 12px; }\n\n.soat-footer-list {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  padding: 8px; }\n\n.soat-footer-angular-logo {\n  height: 50px; }\n\n.soat-footer-copyright {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.soat-footer-links ul {\n  list-style: none;\n  margin: 0 40px;\n  padding: 0; }\n  .soat-footer-links ul a {\n    font-size: 16px;\n    padding: 0;\n    text-decoration: none; }\n    .soat-footer-links ul a:hover {\n      text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .soat-footer-list {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'soat-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6_app_shared_toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_7_app_shared_footer_footer_component__["a" /* FooterComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6_app_shared_toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_7_app_shared_footer_footer_component__["a" /* FooterComponent */]],
        providers: [],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" layout=\"row\" class=\"fixed-header\">\r\n    <button md-button class=\"soat-button\" routerLink=\"/\">\r\n        <md-icon class=\"soat-angular-logo\">directions_car</md-icon>\r\n        SOAT en línea\r\n    </button>\r\n    <div class=\"flex-spacer\"></div>\r\n    <button md-button fxHide.xs=\"true\">\r\n        <md-icon>phone</md-icon>\r\n        <span>(01) 207-6170</span>\r\n    </button>\r\n    <button md-button fxHide.xs=\"true\">\r\n        <md-icon>phonelink_ring</md-icon>\r\n        <span>981394015</span>\r\n    </button>\r\n    <button md-icon-button [md-menu-trigger-for]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <md-toolbar-row fxHide fxShow.xs=\"true\">\r\n        <button md-button>\r\n            <md-icon>phone</md-icon>\r\n            <span>(01) 207-6170</span>\r\n        </button>\r\n        <button md-button>\r\n            <md-icon>phonelink_ring</md-icon>\r\n            <span>981394015</span>\r\n        </button>\r\n    </md-toolbar-row>\r\n</md-toolbar>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item>\r\n        <md-icon>people</md-icon>\r\n        <span>Nuestro Equipo</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>local_car_wash</md-icon>\r\n        <span>Aseguradoras</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>plus_one</md-icon>\r\n        <span>Trabaja con Nosotros</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>live_help</md-icon>\r\n        <span>Preguntas Frecuentes</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>web</md-icon>\r\n        <span>Blog</span>\r\n    </button>\r\n</md-menu>"

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".soat-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px 16px; }\n  .soat-toolbar > .mat-button:last-child {\n    margin-left: auto; }\n\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.soat-angular-logo {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'soat-toolbar',
        template: __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.html"),
        host: { 'class': 'mat-elevation-z5' },
        styles: [__webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/home.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home.f5cbf5f751ac2b7ded45.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
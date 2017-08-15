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

module.exports = "<soat-toolbar></soat-toolbar>\r\n<div fxLayout=\"row\" class=\"mainImage\">\r\n    <div fxLayout=\"column\" fxFlex=\"50%\" fxHide.sm=\"true\" fxHide.xs=\"true\">\r\n        <h1 class=\"mainTitle\">COMPRA TU SOAT</h1>\r\n        <h2 class=\"mainSubTitle\">Fácil, rápido y seguro</h2>\r\n    </div>\r\n    <div fxLayout=\"column\" fxFlex=\"50%\" fxFlex.xs=\"100%\" fxFlex.sm=\"100%\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" class=\"mainSection\" *ngFor=\"let section of sections\">\r\n        <div fxLayout=\"column\" fxLayout.sm=\"row\" fxLayoutAlign=\"center\">\r\n            <md-icon class=\"mainIcon primaryColor\">{{section.icon}}</md-icon>\r\n        </div>\r\n        <div>\r\n            <h3 class=\"accentColor\" fxLayoutAlign.sm=\"center\">{{section.title}}</h3>\r\n            <p>\r\n                {{section.text}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<soat-footer></soat-footer>"

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
                text: 'Sabes que las nuevas tendecias del mercado son Online, vamos compra tu SOAT en unos cuantos pasos.'
            },
            {
                title: 'ASEGURA',
                icon: 'headset_mic',
                text: 'Este metodo de compra Online es 100% seguro, y te enviaremos los datos de tu compra a donde sea que tu quieras.'
            },
            {
                title: 'AHORRA',
                icon: 'redeem',
                text: 'Comprando tu soat Online ahorra tiempo e inviertelo con tu familia, en la comdidad de tu hogar o donde quiera que te encuentres.'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_pages_form_form_component__ = __webpack_require__("../../../../../src/app/pages/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_pages_offer_offer_component__ = __webpack_require__("../../../../../src/app/pages/offer/offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_pages_mail_mail_component__ = __webpack_require__("../../../../../src/app/pages/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_pages_purchase_purchase_component__ = __webpack_require__("../../../../../src/app/pages/purchase/purchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_pages_search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_pages_info_info_component__ = __webpack_require__("../../../../../src/app/pages/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_pages_validity_validity_component__ = __webpack_require__("../../../../../src/app/pages/validity/validity.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8_app_pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_10_app_pages_form_form_component__["a" /* FormComponent */] },
    { path: 'offer', component: __WEBPACK_IMPORTED_MODULE_11_app_pages_offer_offer_component__["a" /* OfferComponent */] },
    { path: 'mail', component: __WEBPACK_IMPORTED_MODULE_12_app_pages_mail_mail_component__["a" /* MailComponent */] },
    { path: 'purchase', component: __WEBPACK_IMPORTED_MODULE_13_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_14_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_15_app_pages_search_search_component__["a" /* SearchComponent */] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_16_app_pages_info_info_component__["a" /* InfoComponent */] },
    { path: 'validity', component: __WEBPACK_IMPORTED_MODULE_17_app_pages_validity_validity_component__["a" /* ValidityComponent */] },
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

/***/ "../../../../../src/app/pages/confirm/confirm-document.component.html":
/***/ (function(module, exports) {

module.exports = "<object data=\"assets/docs/SOAT_ELECTRONICO.pdf\" width=\"400px\" height=\"500px\" type='application/pdf'>\r\n   <p>Disculpa el documento no se pudo mostrar :(</p>\r\n   <a href=\"assets/docs/SOAT_ELECTRONICO.pdf\" target=\"_blank\">Descargalo</a>\r\n </object>"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */]) === "function" && _a || Object])
], ConfirmComponent);

var _a;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>lock</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Completa el formulario y compra al instante</md-card-title>\r\n        <md-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ea maiores explicabo repellat reiciendis\r\n            vel soluta pariatur ut ullam et molestiae iure sit quam, obcaecati optio fugiat natus. Quas, nesciunt.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\r\n                <div fxLayout=\"column\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\">\r\n                    <div class=\"primaryColor\">Datos del Vehículo</div>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Placa\">\r\n                    </md-input-container>\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                        <md-select placeholder=\"Marca\" class=\"full-width\">\r\n                            <md-option *ngFor=\"let marca of marcas\" [value]=\"marca.value\">\r\n                                {{marca.label}}\r\n                            </md-option>\r\n                        </md-select>\r\n                        <md-select placeholder=\"Modelo\" class=\"full-width\">\r\n                            <md-option *ngFor=\"let modelo of modelos\" [value]=\"modelo.value\">\r\n                                {{modelo.label}}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </div>\r\n                    <md-select placeholder=\"Tipo\">\r\n                        <md-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.value\">\r\n                            {{tipo.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                        <md-input-container class=\"full-width\">\r\n                            <input mdInput placeholder=\"Año\" type=\"number\">\r\n                        </md-input-container>\r\n                        <md-select placeholder=\"Uso\" class=\"full-width\">\r\n                            <md-option *ngFor=\"let uso of usos\" [value]=\"uso.value\">\r\n                                {{uso.label}}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </div>\r\n                    <md-select placeholder=\"Región\">\r\n                        <md-option *ngFor=\"let region of regiones\" [value]=\"region.value\">\r\n                            {{region.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <div fxLayout=\"column\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\">\r\n                    <div class=\"primaryColor\">Datos del Contratante</div>\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                        <md-input-container>\r\n                            <input mdInput placeholder=\"DNI\" type=\"number\">\r\n                        </md-input-container>\r\n                        <md-input-container>\r\n                            <input mdInput placeholder=\"Nombre\">\r\n                        </md-input-container>\r\n                    </div>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Apellido Paterno\">\r\n                    </md-input-container>\r\n                    <md-input-container>\r\n                        <input mdInput placeholder=\"Apellido Materno\">\r\n                    </md-input-container>\r\n                    <md-select placeholder=\"Departamento\">\r\n                        <md-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento.value\">\r\n                            {{departamento.label}}\r\n                        </md-option>\r\n                    </md-select>\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap.sm=\"0\" fxLayoutGap=\"10px\">\r\n                        <md-select placeholder=\"Provincia\" class=\"full-width\">\r\n                            <md-option *ngFor=\"let provincia of provincias\" [value]=\"provincia.value\">\r\n                                {{provincia.label}}\r\n                            </md-option>\r\n                        </md-select>\r\n                        <md-select placeholder=\"Distrito\" class=\"full-width\">\r\n                            <md-option *ngFor=\"let distrito of distritos\" [value]=\"distrito.value\">\r\n                                {{distrito.label}}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/offer\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormComponent = (function () {
    function FormComponent() {
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
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'soat-form',
        template: __webpack_require__("../../../../../src/app/pages/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form/form.component.scss")]
    })
], FormComponent);

//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-content>\r\n        <h1 class=\"homeTitle\">\r\n            <md-icon>lock</md-icon>\r\n            SOAT Online\r\n        </h1>\r\n        <h2 class=\"homeSubTitle\">Tu mejor opción a la hora de comprar tu SOAT con total seguridad.</h2>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"50px\">\r\n            <div fxLayoutAlign=\"center\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere enim quam error repellendus, quasi unde voluptate deleniti\r\n                magni nihil sequi facilis voluptatum! Fugiat placeat, voluptatum et aperiam itaque fuga voluptatibus?\r\n            </div>\r\n            <div fxLayoutAlign=\"center\">\r\n                <button class=\"soat-button\" color=\"primary\" md-raised-button routerLink=\"/form\">Comprar Ahora</button>\r\n            </div>\r\n        </div>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 60px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/search\">Ya tengo mi SOAT</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeSubTitle {\n  text-align: center;\n  margin: 5px  20px 20px 20px;\n  font-weight: 100; }\n\n.homeTitle {\n  text-align: center;\n  margin: 0 40px 0 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>check</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Verifica</md-card-title>\r\n        <md-card-subtitle>Verifica los datos de tu vehículo. </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n            <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n                <div><strong>Placa</strong></div>\r\n                <div><strong>Modelo</strong></div>\r\n                <div><strong>Tipo</strong></div>\r\n                <div><strong>Año</strong></div>\r\n                <div><strong>Uso</strong></div>\r\n                <div><strong>Ubicación</strong></div>\r\n            </div>\r\n            <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n                <div>C8V917</div>\r\n                <div>Amarok 4x4 Trendline</div>\r\n                <div>Pick-up</div>\r\n                <div>2011</div>\r\n                <div>Particular</div>\r\n                <div>Lima</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 50px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/validity\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () { };
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'info',
        template: __webpack_require__("../../../../../src/app/pages/info/info.component.html")
    }),
    __metadata("design:paramtypes", [])
], InfoComponent);

//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>mail</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Ingresa tu correo electrónico</md-card-title>\r\n        <md-card-subtitle>Enviaremos tu comprobante de pago y tu certificado SOAT a tu correo electrónico</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <md-input-container>\r\n                    <input mdInput placeholder=\"Correo electrónico\" type=\"email\">\r\n                    <md-error>Ingresa un correo electrónico válido</md-error>\r\n                </md-input-container>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 190px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/purchase\">CONFIRMAR</button>\r\n    </md-card-actions>\r\n</md-card>"

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

/***/ "../../../../../src/app/pages/offer/offer-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td{\r\n    font-size: .9em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/offer/offer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-title class=\"primaryColor\">Detalles</div>\r\n<div md-dialog-content>\r\n    <table>\r\n        <tr>\r\n            <td class=\"accentColor\">Cobertura</td>\r\n            <td class=\"accentColor\" mdTooltip=\"Suma asegurada por persona\">Suma (*)</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Muerte accidental</td>\r\n            <td>Hasta 4 UIT</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Invalidez permanente</td>\r\n            <td>Hasta 1 UIT</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Incapacidad temporal</td>\r\n            <td>Hasta 5 UIT</td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/offer/offer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OfferDetailComponent = (function () {
    function OfferDetailComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return OfferDetailComponent;
}());
OfferDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'offer-detail',
        template: __webpack_require__("../../../../../src/app/pages/offer/offer-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/offer/offer-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object])
], OfferDetailComponent);

var _a;
//# sourceMappingURL=offer-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/offer/offer.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>new_releases</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Tenemos una oferta para tí</md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <md-card class=\"mat-elevation-z5\">\r\n            <md-card-header>\r\n                <div md-card-avatar>\r\n                    <img src=\"https://www.crecerseguros.pe/Content/userfiles/images/PHI-01.jpg\" width=\"40px\" alt=\"oferta-logo\">\r\n                </div>\r\n                <md-card-title>Crecer Seguros</md-card-title>\r\n                <md-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</md-card-subtitle>\r\n            </md-card-header>\r\n            <img md-card-image src=\"https://www.crecerseguros.pe/Content/userfiles/images/Logo.jpg\" alt=\"offer-image\">\r\n            <md-card-content>\r\n                <p>\r\n                    Prima Anual <strong>S/. 85.00</strong> (inc.IGV)\r\n                </p>\r\n            </md-card-content>\r\n            <md-card-actions>\r\n                <button md-button (click)=\"viewDetail()\">\r\n                    <md-icon>info</md-icon>\r\n                    Detalles\r\n                </button>\r\n            </md-card-actions>\r\n        </md-card>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/mail\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/offer/offer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_offer_offer_detail_component__ = __webpack_require__("../../../../../src/app/pages/offer/offer-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfferComponent = (function () {
    function OfferComponent(dialog) {
        this.dialog = dialog;
    }
    OfferComponent.prototype.ngOnInit = function () { };
    OfferComponent.prototype.viewDetail = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2_app_pages_offer_offer_detail_component__["a" /* OfferDetailComponent */]);
    };
    return OfferComponent;
}());
OfferComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'offer',
        template: __webpack_require__("../../../../../src/app/pages/offer/offer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */]) === "function" && _a || Object])
], OfferComponent);

var _a;
//# sourceMappingURL=offer.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_pages_form_form_component__ = __webpack_require__("../../../../../src/app/pages/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_pages_offer_offer_component__ = __webpack_require__("../../../../../src/app/pages/offer/offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_pages_offer_offer_detail_component__ = __webpack_require__("../../../../../src/app/pages/offer/offer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_pages_mail_mail_component__ = __webpack_require__("../../../../../src/app/pages/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_pages_purchase_purchase_component__ = __webpack_require__("../../../../../src/app/pages/purchase/purchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_pages_confirm_confirm_document_component__ = __webpack_require__("../../../../../src/app/pages/confirm/confirm-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_pages_search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_pages_info_info_component__ = __webpack_require__("../../../../../src/app/pages/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_pages_validity_validity_component__ = __webpack_require__("../../../../../src/app/pages/validity/validity.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdDatepickerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6_app_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_pages_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_pages_offer_offer_component__["a" /* OfferComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_pages_offer_offer_detail_component__["a" /* OfferDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_pages_mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_pages_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_pages_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_pages_validity_validity_component__["a" /* ValidityComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_app_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_pages_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_pages_offer_offer_component__["a" /* OfferComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_pages_offer_offer_detail_component__["a" /* OfferDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_pages_mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_pages_purchase_purchase_component__["a" /* PurchaseComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_pages_confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_pages_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_pages_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_pages_validity_validity_component__["a" /* ValidityComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9_app_pages_offer_offer_detail_component__["a" /* OfferDetailComponent */], __WEBPACK_IMPORTED_MODULE_13_app_pages_confirm_confirm_document_component__["a" /* ConfirmDocumentComponent */]],
        providers: [],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/purchase/purchase.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>local_atm</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Pagar</md-card-title>\r\n        <md-card-subtitle>Ingresa la siguiente nformación para realizar el pago de tu SOAT.</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>credit_card</md-icon>\r\n                        <input mdInput placeholder=\"Tarjeta de Crédito o Débito\" type=\"number\">\r\n                    </md-input-container>\r\n                    <md-input-container class=\"full-width\">\r\n                        <button mdPrefix [mdDatepickerToggle]=\"picker\"></button>\r\n                        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Fecha de expiración\">\r\n                    </md-input-container>\r\n                    <md-datepicker #picker></md-datepicker>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>security</md-icon>\r\n                        <input mdInput placeholder=\"Código de seguridad\" type=\"number\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"full-width\">\r\n                        <md-icon mdPrefix>face</md-icon>\r\n                        <input mdInput placeholder=\"Nombre del Titular\">\r\n                    </md-input-container>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 100px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/confirm\">Pagar</button>\r\n    </md-card-actions>\r\n</md-card>"

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

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>search</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Ingresa la placa de tu vehículo</md-card-title>\r\n        <md-card-subtitle>Buscaremos los datos de tu vehículo. </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <md-input-container class=\"full-width\">\r\n                    <md-icon mdPrefix>directions_car</md-icon>\r\n                    <input mdInput placeholder=\"Placa\">\r\n                </md-input-container>\r\n            </div>\r\n        </form>\r\n\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 190px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/info\">Continuar</button>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () { };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'search',
        template: __webpack_require__("../../../../../src/app/pages/search/search.component.html")
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/validity/validity.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"soat-card\">\r\n    <md-card-header>\r\n        <div md-card-avatar class=\"accentColor\">\r\n            <md-icon>today</md-icon>\r\n        </div>\r\n        <md-card-title class=\"accentColor\">Inicio de vigencia</md-card-title>\r\n        <md-card-subtitle>Selecciona la fecha de inicio de vigencia. El último SOAT activo que tenemos registrado vence el 31/01/2017</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <form>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <md-input-container class=\"full-width\">\r\n                    <button mdPrefix [mdDatepickerToggle]=\"picker\"></button>\r\n                    <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Fecha de expiración\">\r\n                </md-input-container>\r\n                <md-datepicker #picker></md-datepicker>\r\n            </div>\r\n        </form>\r\n        <div fxHide fxShow.lg=\"true\">\r\n            <div style=\"height: 170px;\"></div>\r\n        </div>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n        <button class=\"soat-button\" color=\"accent\" md-button routerLink=\"/mail\">CONFIRMAR</button>\r\n    </md-card-actions>\r\n</md-card>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5_app_shared_toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_6_app_shared_footer_footer_component__["a" /* FooterComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5_app_shared_toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_6_app_shared_footer_footer_component__["a" /* FooterComponent */]],
        providers: [],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" layout=\"row\">\r\n    <button md-button class=\"soat-button\">\r\n        <md-icon class=\"soat-angular-logo\">directions_car</md-icon>\r\n        SOAT Online\r\n    </button>\r\n    <div class=\"flex-spacer\"></div>\r\n    <button md-button fxHide.xs=\"true\">\r\n        <md-icon>phone</md-icon>\r\n        <span>(01) 207-6170</span>\r\n    </button>\r\n    <button md-button fxHide.xs=\"true\">\r\n        <md-icon>phonelink_ring</md-icon>\r\n        <span>981394015</span>\r\n    </button>\r\n    <button md-icon-button [md-menu-trigger-for]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <md-toolbar-row fxHide fxShow.xs=\"true\">\r\n        <button md-button>\r\n            <md-icon>phone</md-icon>\r\n            <span>(01) 207-6170</span>\r\n        </button>\r\n        <button md-button>\r\n            <md-icon>phonelink_ring</md-icon>\r\n            <span>981394015</span>\r\n        </button>\r\n    </md-toolbar-row>\r\n</md-toolbar>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item>\r\n        <md-icon>people</md-icon>\r\n        <span>Nuestro Equipo</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>local_car_wash</md-icon>\r\n        <span>Aseguradoras</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>plus_one</md-icon>\r\n        <span>Trabaja con Nosotros</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>live_help</md-icon>\r\n        <span>Preguntas Frecuentes</span>\r\n    </button>\r\n    <button md-menu-item>\r\n        <md-icon>web</md-icon>\r\n        <span>Blog</span>\r\n    </button>\r\n</md-menu>"

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
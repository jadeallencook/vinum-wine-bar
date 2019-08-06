(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/drinks/drinks.component */ "./src/app/pages/drinks/drinks.component.ts");
/* harmony import */ var _pages_food_food_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/food/food.component */ "./src/app/pages/food/food.component.ts");
/* harmony import */ var _pages_wine_wine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/wine/wine.component */ "./src/app/pages/wine/wine.component.ts");







var routes = [
    { path: 'wine', component: _pages_wine_wine_component__WEBPACK_IMPORTED_MODULE_6__["WineComponent"] },
    { path: 'drinks', component: _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_4__["DrinksComponent"] },
    { path: 'food', component: _pages_food_food_component__WEBPACK_IMPORTED_MODULE_5__["FoodComponent"] },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vinum';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_wine_wine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/wine/wine.component */ "./src/app/pages/wine/wine.component.ts");
/* harmony import */ var _pages_food_food_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/food/food.component */ "./src/app/pages/food/food.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/drinks/drinks.component */ "./src/app/pages/drinks/drinks.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_wine_wine_component__WEBPACK_IMPORTED_MODULE_5__["WineComponent"],
                _pages_food_food_component__WEBPACK_IMPORTED_MODULE_6__["FoodComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_8__["DrinksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/drinks/drinks.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/drinks/drinks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  drinks works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/drinks/drinks.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/drinks/drinks.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaW5rcy9kcmlua3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/drinks/drinks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/drinks/drinks.component.ts ***!
  \**************************************************/
/*! exports provided: DrinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksComponent", function() { return DrinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrinksComponent = /** @class */ (function () {
    function DrinksComponent() {
    }
    DrinksComponent.prototype.ngOnInit = function () {
    };
    DrinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drinks',
            template: __webpack_require__(/*! ./drinks.component.html */ "./src/app/pages/drinks/drinks.component.html"),
            styles: [__webpack_require__(/*! ./drinks.component.scss */ "./src/app/pages/drinks/drinks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrinksComponent);
    return DrinksComponent;
}());



/***/ }),

/***/ "./src/app/pages/food/food.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/food/food.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let item of food\">\n    <!-- section title -->\n    <h2 *ngIf=\"!item.name && !item.price && item.category\">{{ item.category }}</h2>\n    <p *ngIf=\"!item.name && !item.price && item.category\" class=\"sub-title\">{{ item.description }}</p>\n    <!--  item -->\n    <h4 *ngIf=\"item.name && item.price && item.category && item.description\">{{ item.name }} {{ item.price }}</h4>\n    <p *ngIf=\"item.name && item.price && item.category && item.description\" class=\"description\">{{ item.description }}</p>\n    <!--  coffee -->\n    <h4 *ngIf=\"item.name && item.price && item.category && !item.description\" class=\"single-line\">{{ item.name }} {{ item.price }}</h4>\n    <!--  notes -->\n    <p *ngIf=\"!item.name && !item.price && !item.category && item.description\" class=\"description\">{{ item.description }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/food/food.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/food/food.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 50px auto;\n  width: 95%;\n  max-width: 500px;\n  text-align: center; }\n  div > div {\n    margin: 0px auto; }\n  div > div > h2,\n    div > div > h4,\n    div > div > p {\n      margin: 0px; }\n  div > div > p.sub-title,\n    div > div > p.description {\n      font-size: 0.75em;\n      margin-bottom: 15px; }\n  div > div > h4.single-line {\n      margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93d3cvVmludW0tV2luZS1CYXIvc3JjL2FwcC9wYWdlcy9mb29kL2Zvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUp0QjtJQU1RLGdCQUFnQixFQUFBO0VBTnhCOzs7TUFVWSxXQUFXLEVBQUE7RUFWdkI7O01BY1ksaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBO0VBZi9CO01Ba0JZLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9vZC9mb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgPiBoMixcbiAgICAgICAgPiBoNCxcbiAgICAgICAgPiBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgID5wLnN1Yi10aXRsZSxcbiAgICAgICAgPnAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgID5oNC5zaW5nbGUtbGluZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/food/food.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/food/food.component.ts ***!
  \**********************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_food_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/food.json */ "./src/assets/food.json");
var _assets_food_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/food.json */ "./src/assets/food.json", 1);



var FoodComponent = /** @class */ (function () {
    function FoodComponent() {
        this.food = _assets_food_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/pages/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.scss */ "./src/app/pages/food/food.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>VINUM WINE BAR</h1>\n\n<nav>\n  <a routerLink=\"/wine\" routerLinkActive=\"active\">Wine</a>\n  <a routerLink=\"/food\" routerLinkActive=\"active\">Food & Drinks</a>\n</nav>\n\n<footer>\n  <span>Vinum Wine Bar | Developed by @jadeallencook</span>\n</footer>"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  margin-bottom: 0px;\n  font-weight: bold;\n  margin-top: 30vh; }\n\nnav {\n  text-align: center; }\n\nnav > a {\n  margin: 15px auto;\n  display: block;\n  color: #ece6de;\n  text-decoration: none;\n  background-color: #000;\n  padding: 10px;\n  max-width: 350px;\n  width: 75%; }\n\nfooter {\n  text-align: center;\n  font-size: 0.75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93d3cvVmludW0tV2luZS1CYXIvc3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIi93d3cvVmludW0tV2luZS1CYXIvc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQ2hCVztFRGlCWCxxQkFBcUI7RUFDckIsc0JDakJRO0VEa0JSLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb2xvcnMuc2Nzcyc7XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG59XG5cbm5hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uYXYgPiBhIHtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogJHBhcGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xufSIsIiRwYXBlcjogI2VjZTZkZTtcbiRibGFjazogIzAwMDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/wine/wine.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/wine/wine.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let flight of flights\">\n    <h3>{{flight.flight}} <span *ngIf=\"flight.price\"> - {{flight.price}}</span></h3>\n    <div *ngFor=\"let wine of flight.wines\">\n        <p>\n            <span *ngIf=\"wine.glass\">\n                {{ wine.glass }}\n                <img src=\"./assets/glass.png\" />\n            </span><span *ngIf=\"wine.bottle\">\n                {{ wine.bottle }}\n                <img src=\"./assets/bottle.png\" />\n            </span><span *ngIf=\"wine.togo\">\n                {{ wine.togo }}\n                <img src=\"./assets/togo.png\" />\n            </span>\n        </p>\n        <h4>{{ wine.name }}</h4>\n        <p>\n            <span>{{ wine.grape }} </span>\n            <span *ngIf=\"wine.region\"> - {{ wine.region }}</span>\n            <span *ngIf=\"wine.year\"> - {{ wine.year }}</span>\n        </p>\n        <p>{{ wine.description }}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/wine/wine.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/wine/wine.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 50px auto;\n  width: 95%;\n  max-width: 500px; }\n  div > h3 {\n    text-align: center;\n    font-size: 1.5em;\n    margin: 50px 0px; }\n  div > div {\n    margin: 0px auto;\n    margin-bottom: 25px; }\n  div > div h4 {\n      font-weight: bold;\n      margin: 0px;\n      font-size: 1.25em; }\n  div > div p:nth-child(1) {\n      margin: 0px;\n      width: auto;\n      float: right;\n      font-size: 1.15em; }\n  div > div p:nth-child(1) img {\n        height: 13px; }\n  div > div p:nth-child(3) {\n      margin: 0px;\n      font-size: 0.85em; }\n  div > div p:nth-child(4) {\n      font-size: 0.85em;\n      font-style: italic;\n      margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93d3cvVmludW0tV2luZS1CYXIvc3JjL2FwcC9wYWdlcy93aW5lL3dpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0VBSHBCO0lBS1Esa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQVB4QjtJQVVRLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQVgzQjtNQWFZLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFmN0I7TUFrQlksV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUFyQjdCO1FBdUJnQixZQUFZLEVBQUE7RUF2QjVCO01BMkJZLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtFQTVCN0I7TUErQlksaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aW5lL3dpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICA+IGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgIH1cbiAgICA+IGRpdiB7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgfVxuICAgICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICB9XG4gICAgICAgIHA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wine/wine.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/wine/wine.component.ts ***!
  \**********************************************/
/*! exports provided: WineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineComponent", function() { return WineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_wines_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/wines.json */ "./src/assets/wines.json");
var _assets_wines_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/wines.json */ "./src/assets/wines.json", 1);



var WineComponent = /** @class */ (function () {
    function WineComponent() {
        var _this = this;
        this.flights = [];
        var index = 0;
        var category = null;
        _assets_wines_json__WEBPACK_IMPORTED_MODULE_2__.map(function (wine) {
            if (wine.category !== category) {
                index++;
                category = wine.category;
                _this.flights.push({
                    flight: category,
                    price: wine.flight,
                    wines: []
                });
            }
            _this.flights[index - 1].wines.push(wine);
        });
    }
    WineComponent.prototype.ngOnInit = function () {
    };
    WineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wine',
            template: __webpack_require__(/*! ./wine.component.html */ "./src/app/pages/wine/wine.component.html"),
            styles: [__webpack_require__(/*! ./wine.component.scss */ "./src/app/pages/wine/wine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WineComponent);
    return WineComponent;
}());



/***/ }),

/***/ "./src/assets/food.json":
/*!******************************!*\
  !*** ./src/assets/food.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, default */
/***/ (function(module) {

module.exports = [{"name":null,"category":"Cocktail","description":"On the Lighter Side","price":null},{"name":"Moscow Mule","category":"Cocktail","description":"Petrov Reserve* with Elliot's Ginger Beer & Fresh lime","price":10},{"name":"Margarita","category":"Cocktail","description":"La Quiere de Oro 100% Blue Agave Wine* with Agave Nectar, Lime & a hint of orange","price":10},{"name":"Lemon Drop","category":"Cocktail","description":"Petrov Reserve* with fresh lomon juice","price":10},{"name":"Vinum Mimosa","category":"Cocktail","description":"Sparkling wine with orange juice","price":10},{"name":"Vinum Red Sangria","category":"Cocktail","description":"Red wine blend infused with apple & orange","price":10},{"name":"Vinum White Sangria","category":"Cocktail","description":"White wine blend infused with pineapple & orange","price":10},{"name":null,"category":null,"description":"*Fermented Spirit - 20% a.b.v","price":null},{"name":null,"category":"Coffee & Soft Drinks","description":null,"price":null},{"name":"Americano","category":"Coffee & Soft Drinks","description":null,"price":2.75},{"name":"Cappuccino / Latte 4.50","category":"Coffee & Soft Drinks","description":null,"price":4.5},{"name":"Ginger Beer","category":"Coffee & Soft Drinks","description":null,"price":5},{"name":"Coke / Sprite / Fanta","category":"Coffee & Soft Drinks","description":null,"price":4},{"name":"Still Water (12oz)","category":"Coffee & Soft Drinks","description":null,"price":4},{"name":"Sparkling Water (16oz)","category":"Coffee & Soft Drinks","description":null,"price":7},{"name":null,"category":"Beer on Tap","description":null,"price":null},{"name":"Islander","category":"Beer on Tap","description":"IPA - Coronado, CA - 7%","price":6},{"name":"Lost Abbey","category":"Beer on Tap","description":"Blonde Ale - San Marcos, CA - 6%","price":6},{"name":"Mission","category":"Beer on Tap","description":"Hefeweizen - San Diego, CA - 5.3%","price":6},{"name":"No. Coast \"Scrimshaw\"","category":"Beer on Tap","description":"Pilsner - Fort Bragg, CA - 4.4%","price":6},{"name":null,"category":"Aged & Craft Beer","description":null,"price":null},{"name":"Dragon's Milk - Bourbon Barrel Aged Stout","category":"Aged & Craft Beer","description":"Holland, MI - 12oz - 11%","price":9},{"name":"Allagash Cruieux - Aged Golden Ale","category":"Aged & Craft Beer","description":"Portland, Maine - 12oz - 11%","price":9},{"name":"Hitachino Nest - White Ale","category":"Aged & Craft Beer","description":"Japan - 330ml - 5.5%","price":9},{"name":"Hitachino Nest - Classic IPA","category":"Aged & Craft Beer","description":"Japan - 330ml - 7%","price":9},{"name":"Xingu - Black Beer","category":"Aged & Craft Beer","description":"Brazil - 350ml - 4.7%","price":6},{"name":"Weihenstephaner - Weizenbock (Dark Hefe)","category":"Aged & Craft Beer","description":"Germany - 330ml - 7.7%","price":7},{"name":"Abita Turbo Dog - Brown Ale","category":"Aged & Craft Beer","description":"Abita Springs, LA - 12oz - 5.6%","price":6},{"name":"Saison Dupont - Farmhouse Ale","category":"Aged & Craft Beer","description":"Tourpes, Belgium - 330ml - 6.5%","price":8},{"name":"Erdinger Wiseebier - Hefeweizen","category":"Aged & Craft Beer","description":"Erding, Germany - 330ml - 5.3%","price":6},{"name":"Fruli - Strawberry Hefeweizen","category":"Aged & Craft Beer","description":"Melle, Belgium - 330ml - 4.1%","price":7},{"name":"Rekorderlig - Strawberry Lime Cider","category":"Aged & Craft Beer","description":"Iceland - 11oz - 4.7%","price":7},{"name":"Tripel Karmeliet - Blonde Ale","category":"Aged & Craft Beer","description":"Buggenhout, Belgium - 8.4%","price":9},{"name":"Old Speckled Hen - English Fine Ale","category":"Aged & Craft Beer","description":"Suffolk, England - 440ml - 5%","price":6},{"name":null,"category":"Starters","description":null,"price":null},{"name":"Oysters*","category":"Starters","description":"Horseradish. Mignonette. Cocktail sauce.","price":2.75},{"name":"Cocktail Shrimp*","category":"Starters","description":"Tail on shrimp. Cocktail sauce.","price":12},{"name":"Caprese Bites","category":"Starters","description":"Fresh mozzarella. Basil. Cherry tomato. Balsamic glaze.","price":6},{"name":"Prosciutto Bites","category":"Starters","description":"Fresh mozzarella. Cherry tomato. Balsamic glaze.","price":6},{"name":"Marinated Olives","category":"Starters","description":"Lemon - Herb oil.","price":6},{"name":"Autumn Roasted Spiced Nuts","category":"Starters","description":"Chef's 3 spice blend.","price":6},{"name":"Artisanal Cheeses","category":"Starters","description":"Three cheeses. Toasted baguette.","price":17},{"name":"Charcuterie","category":"Starters","description":"Three charcuteries. Toasted baguette.","price":17},{"name":"Cheese & Charcuterie","category":"Starters","description":"Three cheeses & three charcuteries. Toasted baguette.","price":29},{"name":null,"category":"Salad","description":"Add Chicken 5. Add Shrimp 6","price":null},{"name":"Baby Spinach & Beet Salad","category":"Salad","description":"Avacado. Grape tomato. Red onion. Feta cheese.","price":10},{"name":"Seasonal Fruit Salad","category":"Salad","description":"Balsamic vinaigrette. Red Grapes. Dried cranberries. Fresh strawberries. Honey walnuts. Feta cheese.","price":10},{"name":"Supreme Spring Mix Salad","category":"Salad","description":"Balsamic vinaigrette. Clementine wedges. Apple slices. Hard-boiled eggs. Pancetta bacon. Chopped almonds.","price":10},{"name":null,"category":"Tapas & Appetizers","description":null,"price":null},{"name":"Bruschetta","category":"Tapas & Appetizers","description":"Tomato. Basil. Goat cheese. Parmesan.","price":9},{"name":"Beer Battered Asparagus","category":"Tapas & Appetizers","description":"Lemon-garlic aioli","price":9},{"name":"Avocado Toast","category":"Tapas & Appetizers","description":"Farmer's Market baguette. Roasted pepitas. Crushed red pepper. Olive oil. Lemon.","price":9},{"name":"Crab Quesadillas","category":"Tapas & Appetizers","description":"Blistered shishito. Spicey garlic sauce.","price":12},{"name":"Pan-Seared Scallop","category":"Tapas & Appetizers","description":"Blood orange shallot vinaigrette","price":12},{"name":"Spiced Calamari","category":"Tapas & Appetizers","description":"In-house Cajun seasoning.","price":8},{"name":"Pancetta Prawns","category":"Tapas & Appetizers","description":"Prawns wrapped in Italian Pancetta bacon.","price":15},{"name":"Prosciutto Flatbread Pizza","category":"Tapas & Appetizers","description":"Marinara & fresh mozzeralla. Artichoke.","price":10},{"name":"Baja Fish Tacos","category":"Tapas & Appetizers","description":"Pickled vegetables. Tobiko. Spicey garlic sauce.","price":12},{"name":"Pork Wings","category":"Tapas & Appetizers","description":"Honey-garlic pesto.","price":10},{"name":"Sous Vide Pork Belly Sliders","category":"Tapas & Appetizers","description":"Hoisin glaze. Quick Kimchi slaw.","price":12},{"name":"Cajun Fries","category":"Tapas & Appetizers","description":"In-house seasoning","price":5},{"name":"Jalapeno Poppers","category":"Tapas & Appetizers","description":"Battered jalapeno halves filled with cream cheese. Chipotle aioli.","price":7},{"name":"Mozzarella Sticks","category":"Tapas & Appetizers","description":"Panko breaded Wisconsin mozzarella. House-made marinara.","price":6},{"name":"Buffalo Chicken Wings","category":"Tapas & Appetizers","description":"Blue cheese & Ranch dipping sauce. Crudite.","price":10},{"name":"Lemongrass & Garlic Wings","category":"Tapas & Appetizers","description":"Banana ketchup.","price":10},{"name":null,"category":"Main","description":null,"price":null},{"name":"Vinum Burger","category":"Main","description":"Brioche bun. Lively Rum pimento cheese. Caramelized onions.","price":16},{"name":"Grilled Chicken Pesto Sandwich","category":"Main","description":"Grilled chicken. Avocado. Tomato. Lettuce.","price":12},{"name":"Vegetarian Pizza","category":"Main","description":"Cauliflower crust. Coconut curry sauce with dates and zucchini. Impossible burger meat crumbles. Fresh mozzarella.","price":22},{"name":"Mushroom Risotto","category":"Main","description":"Chef mix mushrooms. Truffle oil. Add shrimp 5. add scallop 6.","price":12},{"name":"Chorizo Paella","category":"Main","description":"Saffron aioli. Paella originated in Valencia. Add Shrimp 5. Add scallop 6. ","price":12},{"name":"Steak Frites","category":"Main","description":"10oz Rib Eye steak. Truffle butter. Wild chef mix mushrooms. French fries. Side Salad.","price":22},{"name":"Lamb Lollipops","category":"Main","description":"Black bean paste. Balsamic Glaze.","price":22},{"name":"Grilled Salmon","category":"Main","description":"Asparagus. Blood orange shallot vinaigrette.","price":15},{"name":"Fish & Chips","category":"Main","description":"Battered cod fillets. French fries.","price":15},{"name":"Spaghetti and Meatballs","category":"Main","description":"Marinara. Grated parmesan.","price":12},{"name":"Chicken Rigatoni","category":"Main","description":"Grilled Chicken breast. Fresh broccoli. Grated parmesan","price":12},{"name":"Seafood Alfredo Linguine","category":"Main","description":"Shrimp, calamari & scallop. Alfredo. Grated parmesan","price":22},{"name":" ","category":"Vinum's Seasonal Menu","description":"*Consuming raw or undercooked meat, poultry, seafood, shellfish, or egg may increase your risk of foodborne illness, especially if you have a medical condition.","price":null},{"name":"Brown Butter Cake","category":"Dessert","description":"Sriracha honey. Fresh strawberries.","price":8},{"name":"Vanilla Cheese Cake","category":"Dessert","description":"Blueberry sauce","price":8},{"name":"Calamansi Creme Brulee","category":"Dessert","description":"Candied Walnuts. Berries. Edible flowers.","price":8},{"name":"Warm Flourless Chocolate Cake","category":"Dessert","description":"Vanilla ice cream. Salted caramel.","price":8},{"name":null,"category":null,"description":"20% gratuity will be added to parties of 6 or more","price":null},{"name":null,"category":null,"description":"25$ corkage fee... no wines from our retail store please","price":null},{"name":null,"category":null,"description":"Follow us on Facebook & Instagram","price":null},{"name":null,"category":null,"description":"Vinum Bar is the perfect place to hold your next business gathering or special event. Please contact us so we may assist in making it a memorable one","price":null},{"name":null,"category":null,"description":"www.VinumBar.net","price":null},{"name":null,"category":null,"description":"(510) 285-3585","price":null}];

/***/ }),

/***/ "./src/assets/wines.json":
/*!*******************************!*\
  !*** ./src/assets/wines.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, default */
/***/ (function(module) {

module.exports = [{"name":"Benvolio","type":"Bubbles","category":"Bubble","flight":18,"year":0,"local":false,"grape":"Prosecco-Brut","region":"Italy","glass":11,"bottle":44,"togo":31,"description":"Refreshing citrus with slight hints of honey & fresh flowers"},{"name":"Bailly Lapierre","type":"Bubbles","category":"Bubble","flight":18,"year":0,"local":false,"grape":"Cremont de Bourgogne-Reserve Brut","region":"Nevada","glass":12,"bottle":48,"togo":34,"description":"Bone dry, tart apple paired with a tiny hint of mineral and toast"},{"name":"Mont Marcal","type":"Bubbles","category":"Bubble","flight":18,"year":0,"local":false,"grape":"Rosado-Brut Cava","region":"Nevada","glass":11,"bottle":44,"togo":31,"description":"Cherries and blackberries with plum & fig compote"},{"name":"Dopff & Irion","type":"White","category":"Refreshing","flight":18,"year":2016,"local":false,"grape":"Riesling","region":"Alsace","glass":12,"bottle":48,"togo":34,"description":"Peach & pear with plum & lemon"},{"name":"St. Francis","type":"White","category":"Refreshing","flight":18,"year":2017,"local":false,"grape":"Sauvignon Blanc","region":"Sonoma","glass":12,"bottle":48,"togo":34,"description":"Zingy, crisp & refreshing, on a light & seamless body"},{"name":"Tres Chic","type":"White","category":"Refreshing","flight":18,"year":2017,"local":false,"grape":"Rose","region":"Southern France","glass":11,"bottle":44,"togo":31,"description":"Youthful fresh aromas & red fruit flavors with a smooth dry finish"},{"name":"True Myth","type":"White","category":"Chardonnay","flight":19,"year":2016,"local":false,"grape":"Chardonnay","region":"Edna Valley","glass":12,"bottle":48,"togo":34,"description":"Aromas of pear, pineapple, tangerine & vanilla with a creamy texture"},{"name":"Seven Falls","type":"White","category":"Chardonnay","flight":19,"year":2014,"local":false,"grape":"Chardonnay","region":"Wahluke Slope","glass":12,"bottle":48,"togo":34,"description":"Aromas of tropical fruits & toasted marshmallow meld together with a creamy texture"},{"name":"Swanson","type":"White","category":"Chardonnay","flight":19,"year":2014,"local":false,"grape":"Chardonnay","region":"Napa Valley","glass":16,"bottle":64,"togo":45,"description":"Elegant balanced layers of tropical fruits, white jasmine flowers, pear & talc"},{"name":"WindRacer","type":"White","category":"White & Red","flight":19,"year":2014,"local":false,"grape":"Chardonnay","region":"Anderson Valley","glass":16,"bottle":64,"togo":45,"description":"Meyer Lemon, white clover & honeycomb"},{"name":"Robert Hall","type":"Red","category":"White & Red","flight":19,"year":2016,"local":false,"grape":"Merlot","region":"Paso Robles","glass":11,"bottle":44,"togo":31,"description":"Rich aromas of ripe black cherry, accentuated of hints of cedar eminate"},{"name":"Bonanza","type":"Red","category":"White & Red","flight":19,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"California","glass":16,"bottle":64,"togo":45,"description":"Medium ruby-red with scents of currants & dried roses, grape pomace & fresh tilled soil"},{"name":"Monterey Canyon","type":"Red","category":"Pinot Noir","flight":18,"year":2013,"local":false,"grape":"Pinot Noir","region":"Monterey","glass":12,"bottle":48,"togo":34,"description":"Bright, creamy & savory aromas with tart red fruit flavors"},{"name":"Simple Life","type":"Red","category":"Pinot Noir","flight":18,"year":2016,"local":false,"grape":"Pinot Noir","region":"California","glass":10,"bottle":40,"togo":28,"description":"Cranberry & ripe plum intermingle with sage & warm baking spices"},{"name":"Etude \"Lyric\"","type":"Red","category":"Pinot Noir","flight":18,"year":2015,"local":false,"grape":"Pinot Noir","region":"Santa Barbara County","glass":14,"bottle":56,"togo":40,"description":"Ripe cherry, raspberry & cinnamon with cardamom, cola & silky tannins"},{"name":"Motto","type":"Red","category":"Zinfandel","flight":18,"year":2014,"local":false,"grape":"Zinfandel","region":"California","glass":11,"bottle":44,"togo":31,"description":"Bright fruity aromas of plum, cranberry & marionberry"},{"name":"1000 Stories","type":"Red","category":"Zinfandel","flight":18,"year":2016,"local":false,"grape":"Zinfandel","region":"California","glass":12,"bottle":48,"togo":34,"description":"Bursts of aromatic red fruit scents & exotic black fruit flavors"},{"name":"Parducci","type":"Red","category":"Zinfandel","flight":18,"year":2014,"local":false,"grape":"Zinfandel","region":"Mendocino County","glass":12,"bottle":48,"togo":34,"description":"Dark plum, blackberry, sweet spice, dark chocolate & licorice"},{"name":"Michael David Freakshow","type":"Red","category":"Cabernet Sauvignon","flight":19,"year":2016,"local":false,"grape":"Cabernet Sauvignon","region":"Lodi","glass":15,"bottle":60,"togo":42,"description":"Rich, ripe & oaky; bold & complex blackfruit flavors"},{"name":"1000 Stories-Bourbon Barrel Aged","type":"Red","category":"Cabernet Sauvignon","flight":19,"year":2017,"local":false,"grape":"Cabernet Sauvignon","region":"California","glass":12,"bottle":48,"togo":34,"description":"Hints of carmalized sugar, vanilla, dried herbs & a touch of smoke"},{"name":"Juggernaut Hillside","type":"Red","category":"Cabernet Sauvignon","flight":19,"year":2016,"local":false,"grape":"Cabernet Sauvignon","region":"California","glass":16,"bottle":64,"togo":45,"description":"Luxurious texture with bold black fruits, oak, vanilla & tobacco"},{"name":"Tenuta di Arceno Chianti Classico","type":"Red","category":"European","flight":19,"year":2015,"local":false,"grape":"Sangiovese","region":"Italy","glass":16,"bottle":64,"togo":45,"description":"Big & juicy tannins with chocolate, walnut & almond character"},{"name":"Messer del Fauno","type":"Red","category":"European","flight":19,"year":2016,"local":false,"grape":"Primitivo","region":"Italy","glass":12,"bottle":48,"togo":34,"description":"Dark heavy red. Rich fruit flavors of sweet cherry & roasted plum"},{"name":"Can Blau","type":"Red","category":"European","flight":19,"year":2016,"local":false,"grape":"Red Blend (40% Mazuelo 40% Syrah 20% Garnacha)","region":"Spain","glass":12,"bottle":48,"togo":34,"description":"Wood smoke, spice box, incense, lavender, black cherry & plum aromas "},{"name":"Museum Reserva","type":"Red","category":"Reserve","flight":29,"year":2012,"local":false,"grape":"Cigales (100% Tempranillo)","region":"Spain","glass":18,"bottle":72,"togo":51,"description":"Plum & berry with spice & mature tobacco - 100 year old vines"},{"name":"Robert Mondavi","type":"Red","category":"Reserve","flight":29,"year":2014,"local":false,"grape":"Maestro (73% Cabernet Sauvignon, 23% Cabernet Franc 2% merlot & Petit Verdot)","region":"Napa Valley","glass":21,"bottle":84,"togo":59,"description":"Tabacco, soil, slate, tar, olives with lilacs & a caramel-coated coffee bean finish"},{"name":"Austin Hope","type":"Red","category":"Reserve","flight":29,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Paso Robles","glass":21,"bottle":84,"togo":59,"description":"Big, powerful & modern-styled wine with heaps of juicy blackberry & cherry fruit, velvety tannins & a long, smooth, vanilla bean finish"},{"name":"Saracco","type":"Dessert","category":"Sweet & Dessert Wines by the Glass","flight":0,"year":0,"local":false,"grape":"Moscato d'Asti-Frizzante","region":"Nevada","glass":10,"bottle":40,"togo":28,"description":"Peach, honey & orange blossom with apricot & tangerine"},{"name":"Warre's","type":"Dessert","category":"Sweet & Dessert Wines by the Glass","flight":0,"year":0,"local":false,"grape":"Otima 10 year Tawny Port","region":"Portugal","glass":9,"bottle":0,"togo":0,"description":"Racy & fresh with detailed green fig, dried cherries, incense & hazlenut notes"},{"name":"Blandy's","type":"Dessert","category":"Sweet & Dessert Wines by the Glass","flight":0,"year":0,"local":false,"grape":"Alvada 5 year Madeira","region":"Portugal","glass":9,"bottle":0,"togo":0,"description":"Rich aromas of walnuts & caramel cream paired with a pleasant honey & raisin flavor"},{"name":"Graham's","type":"Dessert","category":"Sweet & Dessert Wines by the Glass","flight":0,"year":2012,"local":false,"grape":"Late Bottled Vintage Port","region":"Portugal","glass":7,"bottle":0,"togo":0,"description":"Red Cherries, extraordinary acidity & elegant mineralization"},{"name":"J. Lohr","type":"Dessert","category":"Sweet & Dessert Wines by the Glass","flight":0,"year":2016,"local":false,"grape":"Late Harvest White Reisling","region":"California","glass":12,"bottle":0,"togo":0,"description":"Apricots, drid white fig & orange marmalade paired with honeysuckle"},{"name":"Ruggeri Argeo","type":"Sparkling","category":"Sparkling Wines by the Bottle","flight":0,"year":0,"local":false,"grape":"Prosecco-Brut","region":"Nevada","glass":0,"bottle":44,"togo":31,"description":"Floral & fruity with green apple & a long finish"},{"name":"Varichon & Clerc","type":"Sparkling","category":"Sparkling Wines by the Bottle","flight":0,"year":0,"local":false,"grape":"Privilege Blanc & Blancs","region":"Savoie-France","glass":0,"bottle":44,"togo":31,"description":"Pear, apple, vanilla & toast paired with a smooth & creamy finish"},{"name":"Mont Marcal","type":"Sparkling","category":"Sparkling Wines by the Bottle","flight":0,"year":0,"local":false,"grape":"Rosado-Brut Cava","region":"Nevada","glass":0,"bottle":44,"togo":31,"description":"Cherries and blackberries with plum & fig compote"},{"name":"Bailly Lapierre","type":"Sparkling","category":"Sparkling Wines by the Bottle","flight":0,"year":0,"local":false,"grape":"Cremont de Bourgogne-Reserve Brut","region":"Nevada","glass":0,"bottle":48,"togo":34,"description":"Bone dry, tart apple paired with a tiny hint of mineral and toast"},{"name":"Lanson","type":"Sparkling","category":"Sparkling Wines by the Bottle","flight":0,"year":0,"local":false,"grape":"Black Label Brut","region":"Nevada","glass":0,"bottle":76,"togo":54,"description":"Elegant bubbles infused with berry and citrus, very fresh & lively, with an intensity that carries through the long aftertaste"},{"name":"Scarpetta","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Pinot Grigio Friuli","region":"Italy","glass":0,"bottle":48,"togo":34,"description":"Honey & pear with lavender & a touch of minerality"},{"name":"Martinsancho","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Rueda Verdejo","region":"Spain","glass":0,"bottle":40,"togo":28,"description":"Green melon & lime with grapefruit pith & white peach"},{"name":"Dopff & Irion","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Riesling","region":"Alsace","glass":0,"bottle":48,"togo":34,"description":"peach & pear with plum & lemon"},{"name":"C.H. Berres Estate","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2015,"local":false,"grape":"Riesling","region":"Mosel","glass":0,"bottle":44,"togo":31,"description":"Off dry, peach paired with tangerine and stone fruit"},{"name":"Tangent \"Paragon Vinyard\"","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2015,"local":false,"grape":"Pinot Gris","region":"Edna Valley","glass":0,"bottle":40,"togo":28,"description":"Pineapple, grapefruit & pepper paired with peach, tangerine & green apple"},{"name":"Balletto","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Pinot Gris","region":"Russian River Valley","glass":0,"bottle":40,"togo":28,"description":"Stone fruit & zingy lime citrus notes with a long finish"},{"name":"Dry Creek Vinyard","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2017,"local":false,"grape":"Chenin Blanc","region":"Clarksburg","glass":0,"bottle":48,"togo":34,"description":"Pear and tropical fruit with mandarin, melon & white pear"},{"name":"Hess \"Shirtail Ranches\"","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Sauvignon Blanc","region":"North Coast","glass":0,"bottle":58,"togo":41,"description":"Grapefruit & Lemon grass paired with fig & jasmine"},{"name":"Sileni Estates","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Sauvignon Blanc","region":"Marlborough","glass":0,"bottle":40,"togo":28,"description":"Ripe, tropical & goosberry fruit flavors with a zingy and balanced finish"},{"name":"Dry Creek Vinyard","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2017,"local":false,"grape":"Sauvignon Blanc","region":"Dry Creek Valley","glass":0,"bottle":40,"togo":28,"description":"Pineapple & pear with a light minerality, melon & chestnut"},{"name":"Shannon Ridge","type":"White","category":"Refreshing White by the Bottle","flight":0,"year":2016,"local":false,"grape":"Sauvignon Blanc","region":"Lake Country California","glass":0,"bottle":32,"togo":23,"description":"Green Mango & mineral notes with white peach"},{"name":"Shooting Star","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Mendocino County","glass":0,"bottle":48,"togo":34,"description":"Citrus & mineral notes with stone fruit & bright acidity"},{"name":"Bernier","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"\"Un-oaked\" Chardonnay ","region":"Vale de Loire","glass":0,"bottle":48,"togo":34,"description":"Pear & apple with bright citrus fruits & a hint of minerality"},{"name":"Dom. Seguinot-Bordet","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chablis (Chardonnay)","region":"Burgundy","glass":0,"bottle":44,"togo":33,"description":"Pear & melon with summer fruit"},{"name":"Chateau Haut-Rian","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2014,"local":false,"grape":"Semillion","region":"Premier Cotes de Bordeaux","glass":0,"bottle":40,"togo":28,"description":"Lemon & grapefruit with vanilla & chestnut-100% new barrels"},{"name":"Falcone Family Vinyards","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Santa Maria Valley","glass":0,"bottle":60,"togo":42,"description":"Citrus blossom & dried lemon with pear, grapefruit & apple"},{"name":"Carlson \"White Hills Valley\"","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Santa Barbara County","glass":0,"bottle":48,"togo":34,"description":"Tropical fruit & lime with apples, vanilla & a creamy finish"},{"name":"Beckon","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Central Coast","glass":0,"bottle":64,"togo":45,"description":"Green apple & tropical fruits paired with a toasted vanilla finish"},{"name":"Joseph Drouhin-Laforet","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Bourgogne","glass":0,"bottle":40,"togo":28,"description":"Vanilla & toast with tropical & stone fruits"},{"name":"Playtime Blonde","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2015,"local":false,"grape":"Chardonnay","region":"California","glass":0,"bottle":40,"togo":28,"description":"Fresh pear & tropical fruit with citrus &  a balanced creamy finish"},{"name":"Stag's Leap","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Napa Valley","glass":0,"bottle":72,"togo":51,"description":"Lemon meringue & pineapple with tropical fruit, white peach & toast"},{"name":"Michael David","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2016,"local":false,"grape":"Chardonnay","region":"Lodi","glass":0,"bottle":56,"togo":40,"description":"Green apple, citrus & spiced peach"},{"name":"Lake Sonoma Winery","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2015,"local":false,"grape":"Chardonnay","region":"Russian River Valley","glass":0,"bottle":64,"togo":45,"description":"Citrus & mineral notes with stone fruit & bright acidity"},{"name":"Saintsbury","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2015,"local":false,"grape":"Chardonnay","region":"Carneros","glass":0,"bottle":64,"togo":45,"description":"Kumquats & apricot with tangy citrus, white peach & cloves"},{"name":"Harken","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2017,"local":false,"grape":"Chardonnay","region":"California","glass":0,"bottle":52,"togo":36,"description":"A classic profile  of tropical fruit & Bosc pear alongside warm oak aromatics"},{"name":"Mer Soleil Reserve","type":"White","category":"Chardonnay by the Bottle","flight":0,"year":2015,"local":false,"grape":"Chardonnay","region":"Santa Barbara County","glass":0,"bottle":88,"togo":62,"description":"Brings cream, butterscotch & savory leaves to the fore with a nutmeg finish"},{"name":"Bourgogne Rouge Le Chapitre Andre Gagey","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2014,"local":false,"grape":"Pinot Noir","region":"Burgundy","glass":0,"bottle":99,"togo":70,"description":"Strawberry & red cherry flavors are lifted with balanced tannins & acidity"},{"name":"Old Soul","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2016,"local":false,"grape":"Pinot Noir","region":"Lodi","glass":0,"bottle":40,"togo":28,"description":"Floral tones with cherry, raspberry & blackberry"},{"name":"Parker Station","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2017,"local":false,"grape":"Pinot Noir","region":"Central Coast","glass":0,"bottle":40,"togo":28,"description":"Wild Strawberry, earth & vanilla with cherry, cranberry & clove"},{"name":"Jospeh Droughin-Laforet","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2016,"local":false,"grape":"Pinot Noir","region":"Bourgogne","glass":0,"bottle":48,"togo":34,"description":"Raspberry & wild strawberry with black cherry & light tannins"},{"name":"Rail 2 Rail","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2014,"local":false,"grape":"Old Vine Zinfandel","region":"Lodi","glass":0,"bottle":40,"togo":28,"description":"Ripe plum & spice with a balanced silky finish"},{"name":"DeLoach","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2014,"local":false,"grape":"Zinfandel","region":"Russian River Valley","glass":0,"bottle":72,"togo":51,"description":"Attractive elements of the grape variety, bright red, blueberry & blackberry flavors"},{"name":"Michael David \"Lust\"","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2015,"local":false,"grape":"Zinfandel","region":"Lodi","glass":0,"bottle":141,"togo":99,"description":"Blackberry & black pepper with spice, smoaked oak & a smooth finish"},{"name":"Shannon Ridge \"High Elevation\"","type":"Red","category":"Pinot Noir & Zinfandel by the Bottle","flight":0,"year":2015,"local":false,"grape":"Zinfandel","region":"Lake Country California","glass":0,"bottle":48,"togo":34,"description":"Ripe fruit & blackberry with spices and oak notes"},{"name":"La Storia","type":"Red","category":"Merlot & Cabernet by the Bottle","flight":0,"year":2015,"local":false,"grape":"Merlot","region":"Alexander Valley","glass":0,"bottle":56,"togo":40,"description":"Plum, black licorice & herbs with vanilla, brown sugar and cocoa dust"},{"name":"Chateau Des Landes Grand Vin De Bordeaux","type":"Red","category":"Merlot & Cabernet by the Bottle","flight":0,"year":2015,"local":false,"grape":"Red Blend (80% Merlot)","region":"Lussac Saint-Emilion","glass":0,"bottle":40,"togo":28,"description":"Dense blackberry with a peppery finish"},{"name":"Falcone Family Vinyards","type":"Red","category":"Merlot & Cabernet by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Paso Robles","glass":0,"bottle":96,"togo":68,"description":"Anise, cocoa & smoke with balck cherry & mocha"},{"name":"Lodi Estates","type":"Red","category":"Merlot & Cabernet by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Lodi","glass":0,"bottle":48,"togo":34,"description":"Cocoa, cedar & limestone with mocha, vanilla & black pepper"},{"name":"Silver Totem","type":"Red","category":"Merlot & Cabernet by the Bottle","flight":0,"year":2016,"local":false,"grape":"Cabernet Sauvignon","region":"Washington","glass":0,"bottle":52,"togo":36,"description":"Blackberry, light cherry, herbs & light chocolate with smooth & soft tannins"},{"name":"Jax","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":141,"togo":99,"description":"Cassis, cedar & black cherry with bluberry & blackberry"},{"name":"La Jota","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Howell Mountian","glass":0,"bottle":199,"togo":139,"description":"Full-bodied & dense, with maderately high tannins yet it remains sweet & fruity"},{"name":"J. Lohr \"Hilltop\"","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Paso Robles","glass":0,"bottle":75,"togo":53,"description":"Blackberry, currant & toasted hazlenut. Dense yet soft"},{"name":"Louis M. Martini","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Alexander Valley","glass":0,"bottle":76,"togo":54,"description":"Cherry compote & fig with a touch of cinnamon spice, nutmeg & clove"},{"name":"Donati Familly Vinyard","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Central Coast","glass":0,"bottle":48,"togo":34,"description":"Cassis, tobacco & tea with cocoa & bold tannins"},{"name":"Trefethen Family Vinyard","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Oak Knoll, Napa","glass":0,"bottle":108,"togo":76,"description":"Blackberry, currant & dried fruit with cassis, cocoa & black pepper"},{"name":"Austerity","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Paso Robles","glass":0,"bottle":56,"togo":40,"description":"Cherry, licorice & sweet oak"},{"name":"Caymus","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":195,"togo":137,"description":"Cocoa, sweet tabacco & oak"},{"name":"Cymus Special Selection","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":399,"togo":280,"description":"Dark fruits & chocolate with cocoa nibs"},{"name":"Clos Pegase","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":99,"togo":70,"description":"Black cherry, plum & blackberry with black licorice"},{"name":"Raymond Reserve","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2015,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":90,"togo":63,"description":"Blackberry, raspberry & vanilla with boysenberry, cardomom & anise"},{"name":"Raymond Generations","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":270,"togo":189,"description":"Black cherry, spices & huckleberry with cocoa & caramelized brown sugar"},{"name":"Spring Mountian Vinyard","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2012,"local":false,"grape":"Cabernet Sauvignon","region":"Napa-Spring Mtn.","glass":0,"bottle":172,"togo":120,"description":"Raspberry & plum with chocolate, brown spice & black pepper"},{"name":"Yao Ming","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":99,"togo":70,"description":"Blackcherry, cherry, cassis & plum with hints of warm vanilla and spice"},{"name":"Freemark Abbey","type":"Red","category":"Cabernet Sauvignon by the Bottle","flight":0,"year":2014,"local":false,"grape":"Cabernet Sauvignon","region":"Napa Valley","glass":0,"bottle":90,"togo":63,"description":"Blackcherry, Black currant, blueberry, & dark cherry with chocolate truffle, cocoa, cinnamin, clove, & a hint of tobacco"},{"name":"Pedroncelli","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2016,"local":false,"grape":"Petite Sirah","region":"Dry Creek Valley","glass":0,"bottle":56,"togo":40,"description":"Blueberry & red plum with vanilla, black pepper & cherry"},{"name":"Boaventura de Caires","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2015,"local":false,"grape":"Petite Sirah","region":"Livermore Valley","glass":0,"bottle":60,"togo":42,"description":"Blueberry & mocha notes with medium acidity & heavy tannins"},{"name":"Alamos \"Seleccion\"","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2016,"local":false,"grape":"Malbec","region":"Mendoza, Argentina","glass":0,"bottle":48,"togo":34,"description":"Blackberry & black cherry with sweet spice & a fruity finish"},{"name":"Boaventura de Caires","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":0,"local":false,"grape":"Red Mutt (46% Syrah, 30% Petite Sirah, 15% Cabernet Sauvignon & 9% Zinfandel)","region":"Livermore Valley","glass":0,"bottle":48,"togo":34,"description":"This big, robust wine was aged 18 months in second year French barrels"},{"name":"Niner","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2014,"local":false,"grape":"Red Blend (Merlot, Cab, & Syrah)","region":"Paso Robles","glass":0,"bottle":60,"togo":42,"description":"Infused with cozy aromas of toasted sugar, cinnamon & nutmeg"},{"name":"Carlson \"Charades\"","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2015,"local":false,"grape":"Rhone Blend (40% Mourvedre, 36% Grenache & 20% Syrah)","region":"Santa Ynez Valley","glass":0,"bottle":56,"togo":40,"description":"Dark red fruit & rhubarb with earthy tones & a touch of oak"},{"name":"Losada","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2016,"local":false,"grape":"Vinos de Finca (100% Mencia)","region":"Bierzo","glass":0,"bottle":48,"togo":34,"description":"Sweet raspberry & cherry with plum, blood orange & cocoa"},{"name":"Marietta Roman Estate","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2015,"local":false,"grape":"(Zinfandel, Petite Syrah & Barbera)","region":"Sonoma","glass":0,"bottle":60,"togo":42,"description":"Floral notes with pomegranate, strawberry, spice & leather"},{"name":"Gravel Bar","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2014,"local":false,"grape":"Alluvial Red","region":"Columbia Valley","glass":0,"bottle":56,"togo":40,"description":"Dried Cherries & plum with toffee, vanilla & bold tannins"},{"name":"Vina Mayor","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2009,"local":false,"grape":"Ribera del Duero","region":"Spain","glass":0,"bottle":80,"togo":56,"description":"Ripe fruit with spice, aromatic herbs & leather"},{"name":"Dom. De Cristia","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2015,"local":false,"grape":"Chateauneuf du Pape","region":"Rhone Valley","glass":0,"bottle":84,"togo":59,"description":"Blackberry & peach pit with violet & spice"},{"name":"Opus One","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2014,"local":false,"grape":"(80% Cab Sauv, 7% Petit Verdot, 6% Cab Franc, 5% Merlot, & 2% Malbec)","region":"Santa Ynez Valley","glass":0,"bottle":495,"togo":395,"description":"On the nose is an herbal aroma with dark chocolate & vivid aromas of incense, wild cherry & blackberry fruit. On the palate is a tart raspberry edge followed by toasted oak & a long finnish with heavy tannins"},{"name":"Verite La Muse","type":"Red","category":"Miscellaneous Reds by the Bottle","flight":0,"year":2014,"local":false,"grape":"Red Blend (88% Merlot)","region":"Sonoma County","glass":0,"bottle":925,"togo":650,"description":"Black fruit & violet with spice & cocoa powder"}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /www/Vinum-Wine-Bar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
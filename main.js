(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\web\acquaint\src\main.ts */"zUnb");


/***/ }),

/***/ "03sZ":
/*!*********************************************************!*\
  !*** ./src/app/share-link/share-link-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ShareLinkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLinkRoutingModule", function() { return ShareLinkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_joining_link_share_joining_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-joining-link/share-joining-link.component */ "qcMo");





const routes = [
    {
        path: '',
        component: _share_joining_link_share_joining_link_component__WEBPACK_IMPORTED_MODULE_2__["ShareJoiningLinkComponent"],
    }
];
class ShareLinkRoutingModule {
}
ShareLinkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShareLinkRoutingModule });
ShareLinkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShareLinkRoutingModule_Factory(t) { return new (t || ShareLinkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShareLinkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareLinkRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.constants */ "KNp+");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _share_link_faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-link/faq-info/faq-info.component */ "OQaw");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function UserComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserComponent_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.username);
} }
function UserComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setUserName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.preventRoomEntry);
} }
function UserComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
} }
function UserComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You are all good to go! Click start to begin. You can check out our guide below or if you want to know more about Acquaint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserComponent {
    constructor(userService, router, activateRoute, http, snackBar) {
        this.userService = userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.http = http;
        this.snackBar = snackBar;
        this.preventRoomEntry = true;
        this.noErrors = true;
        this.loading = false;
    }
    ngOnInit() {
        /* check if the room code exists
        * is valid
        * two people are not already in the room
        * not closed
        * not expired
        */
        this.activateRoute.params.subscribe(params => {
            this.validateRoomCode(params.roomCode);
        });
    }
    setUserName() {
        if (this.username === undefined || this.username.trim() === '') {
            this.snackBar.open('Username is required', '', {
                duration: 3000
            });
            return;
        }
        this.loading = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        // before setting the username the validation happens once more just in case and the room is prepared
        this.http
            .get(_global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ENDPOINT + _global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ROOM_JOIN_ENDPOINT + this.userService.getTopicName(), { headers, responseType: 'json' })
            .subscribe((response) => {
            if (response.status === '1') {
                this.userService.setUserName(this.username);
                this.router.navigate(['messaging']);
            }
            else {
                this.noErrors = false;
                this.errorMessage = response.reason;
            }
        });
    }
    setRoomCode(roomCode) {
        this.userService.setTopicName(roomCode);
    }
    validateRoomCode(roomCode) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        this.http.get(_global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ENDPOINT + _global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ROOM_VALIDATE_ENDPOINT + roomCode, { headers, responseType: 'json' })
            .subscribe((response) => {
            if (response.status === '1') {
                this.preventRoomEntry = false;
                this.noErrors = true;
                this.setRoomCode(roomCode);
            }
            else {
                this.preventRoomEntry = true;
                this.noErrors = false;
                this.errorMessage = response.reason;
            }
        }, () => {
            this.preventRoomEntry = true;
            this.noErrors = false;
            this.errorMessage = 'The acquaint room you are trying to join does not exist';
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 12, vars: 5, consts: [[1, "container"], [1, "row", 2, "text-align", "center"], ["src", "assets/acquaint_logo.png", 1, "banner_image"], [4, "ngIf"], ["class", "input-container", 4, "ngIf"], ["mode", "indeterminate"], [1, "input-container"], ["appearance", "fill"], ["matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["aria-hidden", "false", "aria-label", "error", 1, "center-icon"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserComponent_div_6_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserComponent_div_7_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserComponent_mat_card_8_Template, 6, 1, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserComponent_mat_card_10_Template, 4, 0, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-faq-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.noErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noErrors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _share_link_faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_7__["FaqInfoComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.center-icon[_ngcontent-%COMP%] {\r\n    color: red;\r\n    float: left;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlci1pY29uIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "EcG6":
/*!*******************************************************************!*\
  !*** ./src/app/services/linkGeneration/link-generator.service.ts ***!
  \*******************************************************************/
/*! exports provided: LinkGenerationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGenerationService", function() { return LinkGenerationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global.constants */ "KNp+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _errorHandler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errorHandler/error-handler.service */ "t1Kc");






class LinkGenerationService {
    constructor(httpClient, errorHandlerService) {
        this.httpClient = httpClient;
        this.errorHandlerService = errorHandlerService;
        this.REST_API_SERVER = _global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ENDPOINT + '/link';
    }
    getLink() {
        this.data = this.httpClient.get(this.REST_API_SERVER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandlerService.handleError('Link Generation')));
        return this.data;
    }
}
LinkGenerationService.ɵfac = function LinkGenerationService_Factory(t) { return new (t || LinkGenerationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errorHandler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"])); };
LinkGenerationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LinkGenerationService, factory: LinkGenerationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkGenerationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _errorHandler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "IYnI":
/*!*************************************************!*\
  !*** ./src/app/share-link/share-link.module.ts ***!
  \*************************************************/
/*! exports provided: ShareLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLinkModule", function() { return ShareLinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _share_joining_link_share_joining_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-joining-link/share-joining-link.component */ "qcMo");
/* harmony import */ var _share_link_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-link-routing.module */ "03sZ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq-info/faq-info.component */ "OQaw");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");











class ShareLinkModule {
}
ShareLinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShareLinkModule });
ShareLinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShareLinkModule_Factory(t) { return new (t || ShareLinkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _share_link_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShareLinkRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShareLinkModule, { declarations: [_share_joining_link_share_joining_link_component__WEBPACK_IMPORTED_MODULE_2__["ShareJoiningLinkComponent"], _faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_8__["FaqInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _share_link_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShareLinkRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"]], exports: [_faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_8__["FaqInfoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareLinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_share_joining_link_share_joining_link_component__WEBPACK_IMPORTED_MODULE_2__["ShareJoiningLinkComponent"], _faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_8__["FaqInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _share_link_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShareLinkRoutingModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"]
                ],
                exports: [_faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_8__["FaqInfoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KNp+":
/*!*************************************!*\
  !*** ./src/app/global.constants.ts ***!
  \*************************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
class Globals {
}
Globals.MESSAGE_SOCKET = '/chat/';
Globals.ENDPOINT = 'http://3.80.221.186:8080';
Globals.ANALYTICS_TOPIC = 'analytics';
Globals.SOCKET_ENDPOINT = '/ws-chat';
Globals.SEND_API_ENDPOINT = '/api/send';
Globals.ROOM_JOIN_ENDPOINT = '/join/';
Globals.ROOM_CLOSE_ENDPOINT = '/close/';
Globals.FEEDBACK_ENDPOINT = '/api/feedback';
Globals.ROOM_VALIDATE_ENDPOINT = '/validate/';
Globals._TYPE_MESSAGE = 1;
Globals._TYPE_EVENT = 2;


/***/ }),

/***/ "OQaw":
/*!***********************************************************!*\
  !*** ./src/app/share-link/faq-info/faq-info.component.ts ***!
  \***********************************************************/
/*! exports provided: FaqInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqInfoComponent", function() { return FaqInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");




class FaqInfoComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goToFeedbackForm() {
        this.route.navigate(['feedback']);
    }
}
FaqInfoComponent.ɵfac = function FaqInfoComponent_Factory(t) { return new (t || FaqInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FaqInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqInfoComponent, selectors: [["app-faq-info"]], decls: 58, vars: 0, consts: [[2, "margin", "10px"], ["href", "feedback"]], template: function FaqInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " How does Acquaint Work? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " acquaint helps your friends set you up on online dates with their friends. It\u2019s the perfect app for matchmakers and matchfinders. We will keep adding features to speed up this process, help you understand the person on the other side of our links, and overall have a fun time in a safe and private environment. Stuff on Acquaint might break from time to time as we are still in our alpha stages so please forgive any weird bugs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Who is Acquaint for? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Acquaint is for everyone who is 18 years of age or older. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Safety & Privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The team at Acquaint are really focused on your safety and privacy and do things like: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We use HTTPS and are bringing encryption of all messages on our platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "We do not collect any data that isn't related to our app experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " but we can't control everything. Here are some guidelines to ensure your safety: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Do not accept match making links from people you don't trust (or like)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Do not reveal your identity if you are uncomfortable with it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "If you choose to go on a first time offline date, do it in a public place during the day time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " What's coming to Acquaint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "If all works out we plan to add the following to Acquaint:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "More encryption and security features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "User profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get rid of link creation and allow match makers to match users on the app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Provide rewards to matchmakers and have a leaderboard (for bragging reasons)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Like or don't like something about acquaint? Let us know:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Feedback form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], styles: ["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZmFxLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAsIGxpIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-info',
                templateUrl: './faq-info.component.html',
                styleUrls: ['./faq-info.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'acquaint';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _share_link_share_link_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./share-link/share-link.module */ "IYnI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["TextFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _share_link_share_link_module__WEBPACK_IMPORTED_MODULE_14__["ShareLinkModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["TextFieldModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _share_link_share_link_module__WEBPACK_IMPORTED_MODULE_14__["ShareLinkModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["TextFieldModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _share_link_share_link_module__WEBPACK_IMPORTED_MODULE_14__["ShareLinkModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "isCG":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.constants */ "KNp+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");













function FeedbackComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.genderAlert, " ");
} }
function FeedbackComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.recommendToFriendAlert, " ");
} }
function FeedbackComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.userAlert, " ");
} }
function FeedbackComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.userAlert, " ");
} }
class FeedbackComponent {
    constructor(router, http, formBuilder) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.genderAlert = "Please enter Male/Female/Others";
        this.recommendToFriendAlert = "Please enter Yes/No/Maybe";
        this.userAlert = "Please enter minimum 5 characters";
        this.loading = false;
        this.message = {};
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            recommendToFriend: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]],
            userLiked: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            userWants: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
        });
    }
    get recommendToFriend() {
        return this.formGroup.get("recommendToFriend");
    }
    onSubmit(post) {
        this.message = JSON.stringify(post);
        this.loading = true;
        this.http.post(_global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].ENDPOINT + _global_constants__WEBPACK_IMPORTED_MODULE_2__["Globals"].FEEDBACK_ENDPOINT, this.message, { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
            .subscribe((m) => this.router.navigate(['']));
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 36, vars: 7, consts: [[1, "mcontainer"], [1, "container", "main"], [1, "card-container", "shadow-lg", "p-3", "mb-5", "bg-light", "rounded"], ["src", "assets/acquaint_logo.png", 1, "banner_image"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12"], ["matInput", "", "placeholder", "Gender", "formControlName", "gender"], ["matInput", "", "formControlName", "recommendToFriend"], ["matInput", "", "placeholder", "I liked....", "formControlName", "userLiked"], ["matInput", "", "placeholder", "I liked....", "formControlName", "userWants"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "button", 3, "disabled"], ["mode", "indeterminate"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedbackComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeedbackComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FeedbackComponent_mat_error_14_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Would you recommend this to a friend?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FeedbackComponent_mat_error_20_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What did you like about Acquaint?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FeedbackComponent_mat_error_26_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "What do you think we could do better?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FeedbackComponent_mat_error_32_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["gender"].valid && ctx.formGroup.controls["gender"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["recommendToFriend"].valid && ctx.formGroup.controls["recommendToFriend"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["userLiked"].valid && ctx.formGroup.controls["userLiked"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls["userWants"].valid && ctx.formGroup.controls["userWants"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mcontainer[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 5%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-size: cover;\r\n  }\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuLm1haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "qcMo":
/*!*******************************************************************************!*\
  !*** ./src/app/share-link/share-joining-link/share-joining-link.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShareJoiningLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareJoiningLinkComponent", function() { return ShareJoiningLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_linkGeneration_link_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/linkGeneration/link-generator.service */ "EcG6");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../faq-info/faq-info.component */ "OQaw");








class ShareJoiningLinkComponent {
    constructor(clipboard, snackBar, linkService) {
        this.clipboard = clipboard;
        this.snackBar = snackBar;
        this.linkService = linkService;
        this.shareLink = '';
    }
    ngOnInit() {
        this.getLink();
    }
    copyLink() {
        this.clipboard.copy(this.shareLink);
        this.snackBar.open('Link Copied! You can now paste it anywhere!', '', {
            duration: 3000
        });
    }
    copyShareText() {
        const message = `Hey! I would like you to meet my friend using this link: ${this.shareLink}. I think you two would hit it off well ;)`;
        this.clipboard.copy(message);
        this.snackBar.open('Message Copied to your clipboard! You can now paste it anywhere!', '', {
            duration: 3000
        });
    }
    getLink() {
        this.linkService.getLink()
            .subscribe((data) => {
            this.shareLink = data.link;
        });
    }
}
ShareJoiningLinkComponent.ɵfac = function ShareJoiningLinkComponent_Factory(t) { return new (t || ShareJoiningLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_linkGeneration_link_generator_service__WEBPACK_IMPORTED_MODULE_3__["LinkGenerationService"])); };
ShareJoiningLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareJoiningLinkComponent, selectors: [["app-share-joining-link"]], decls: 32, vars: 1, consts: [[1, "mcontainer"], [1, "container", "main"], [1, "card-container", "shadow-lg", "p-3", "mb-5", "bg-light", "rounded"], ["src", "assets/acquaint_logo.png", 1, "banner_image"], [1, "heading"], [1, "sub-heading"], [1, "row"], [1, "col-12"], ["id", "link_share_text", 1, "link_share_text"], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "5px", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ShareJoiningLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How it works:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copy and send the message or link below to the two people you want to match. Make sure to not change it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Those two people will click on the link, they can set their username and get into a acquaint room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Chat it up on acquaint. We know acquaint is an awesome app, but the goal is to stop chatting online and go on an offline date when everything is safe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Leave us feedback on how we can improve. It really helps us out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Set up your friends using the link below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pro tip: You can copy the message or just the link!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareJoiningLinkComponent_Template_button_click_27_listener() { return ctx.copyShareText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareJoiningLinkComponent_Template_button_click_29_listener() { return ctx.copyLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Copy Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-faq-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hey! I would like you to meet my friend using this link: ", ctx.shareLink, ". I think you two would hit it off well ;) ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _faq_info_faq_info_component__WEBPACK_IMPORTED_MODULE_6__["FaqInfoComponent"]], styles: [".mcontainer[_ngcontent-%COMP%] {\r\n  padding: 5%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-size: cover;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-family: 'Roboto',sans-serif;\r\n}\r\n\r\n.link_share_text[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin: 5px;\r\n  background-color: #bdbcb9;\r\n  text-align: left;\r\n  border-radius: 4px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .link_share_text[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n  }\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLWpvaW5pbmctbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNoYXJlLWpvaW5pbmctbGluay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubGkge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxpbmtfc2hhcmVfdGV4dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiY2I5O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5saW5rX3NoYXJlX3RleHQge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareJoiningLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-share-joining-link',
                templateUrl: './share-joining-link.component.html',
                styleUrls: ['./share-joining-link.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: src_app_services_linkGeneration_link_generator_service__WEBPACK_IMPORTED_MODULE_3__["LinkGenerationService"] }]; }, null); })();


/***/ }),

/***/ "t1Kc":
/*!****************************************************************!*\
  !*** ./src/app/services/errorHandler/error-handler.service.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ErrorHandlerService {
    constructor(router) {
        this.router = router;
    }
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            // Let the app keep running by returning an empty result.
            if (error.status == 401)
                this.router.navigate([`/error/401`]);
            else if (error.status == 504)
                this.router.navigate([`/error/504`]);
            else if (error.status == 403 || error.status == 401)
                this.router.navigate([`/error/401`]);
            else if (error.status == 500) {
                if (result)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
                else
                    this.router.navigate([`/error/500`]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "3nXK");






const routes = [
    { path: 'messaging', loadChildren: () => __webpack_require__.e(/*! import() | messaging-messaging-module */ "messaging-messaging-module").then(__webpack_require__.bind(null, /*! ./messaging/messaging.module */ "nP7n")).then(m => m.MessagingModule) },
    { path: 'set-me-up/:roomCode', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./share-link/share-link.module */ "IYnI")).then(m => m.ShareLinkModule) },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserService {
    constructor() { }
    setUserName(username) {
        this.username = username;
    }
    getUserName() {
        return this.username;
    }
    setTopicName(topic) {
        this.topicName = topic;
    }
    getTopicName() {
        return this.topicName;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
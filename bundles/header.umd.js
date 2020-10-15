(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('header', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.header = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var HeaderService = /** @class */ (function () {
        function HeaderService() {
        }
        return HeaderService;
    }());
    HeaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(); }, token: HeaderService, providedIn: "root" });
    HeaderService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    HeaderService.ctorParameters = function () { return []; };

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        HeaderComponent.prototype.ngOnInit = function () {
        };
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-header',
                    template: "\n    <p>\n      header works!\n    </p>\n  "
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return []; };

    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        return HeaderModule;
    }());
    HeaderModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [HeaderComponent],
                    imports: [],
                    exports: [HeaderComponent]
                },] }
    ];

    /*
     * Public API Surface of header
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;
    exports.HeaderService = HeaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=header.umd.js.map

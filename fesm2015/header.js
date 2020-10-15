import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class HeaderService {
    constructor() { }
}
HeaderService.ɵprov = ɵɵdefineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(); }, token: HeaderService, providedIn: "root" });
HeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HeaderService.ctorParameters = () => [];

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-header',
                template: `
    <p>
      header works!
    </p>
  `
            },] }
];
HeaderComponent.ctorParameters = () => [];

class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
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

export { HeaderComponent, HeaderModule, HeaderService };
//# sourceMappingURL=header.js.map

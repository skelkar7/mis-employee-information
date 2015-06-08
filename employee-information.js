/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var EmployeeInformation = (function () {
    function EmployeeInformation(builder) {
        this.form = builder.group({
            firstName: [""],
            middleName: [""],
            lastName: [""],
            designation: [""]
        });
    }
    EmployeeInformation = __decorate([
        angular2_1.Component({
            selector: 'emp-info',
            injectables: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'templates/employee-information.html',
            directives: [angular2_2.formDirectives]
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], EmployeeInformation);
    return EmployeeInformation;
})();
angular2_1.bootstrap(EmployeeInformation);

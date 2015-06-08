/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Validators, ControlGroup, FormBuilder, formDirectives} from 'angular2/angular2';


@Component({
	selector: 'emp-info',
	injectables: [FormBuilder]
})
@View({
	templateUrl: 'templates/employee-information.html',
	directives: [formDirectives]
})
class EmployeeInformation {
	form: ControlGroup;

	constructor(builder: FormBuilder) {
		this.form = builder.group({
			firstName  : [""],    //Validators.required is not present in angular2/angular2
			middleName : [""],
			lastName   : [""],
			designation: [""]
		});
	}

}

bootstrap(EmployeeInformation);

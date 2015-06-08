/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';


@Component({
	selector: 'emp-info'
})
@View({
	template: '<h1> hello {{name}}<h1>'
})
class EmployeeInformation {
	name: string;

	constructor(){
		this.name = 'Sojjwal';
	}

}

bootstrap(EmployeeInformation);

import { Component } from '@angular/core';
import { PhoneService } from './services/phone.service';
import { PhoneModel } from './model/phone.model';


@Component({
    moduleId: module.id,
    selector: 'phone',
    templateUrl: 'phone.add.html',
    providers: [PhoneService]
})

export class PhoneComponent {

    firstName: String;
    lastName: String;
    mobileNumber: String;
    landLineNumber: String;
    email: String;
    gender: String;
    company: String;
    jobTitle: String;
    dateOfBirthp: dateOfBirth;
    errorMessage: String;
    // phone:PhoneModel

    constructor(private phoneService: PhoneService) {
        this.firstName = "";
        this.lastName = "";
        this.mobileNumber = "";
        this.landLineNumber = "";
        this.email = "";
        this.gender = "";
        this.company = "";
        this.jobTitle = "";
        this.dateOfBirthp = { month: '', day: '', year: '' };


    }




    onSubmit() {

        //  private p=new PhoneModel(this.firstName,this.lastName,this.mobileNumber,this.landLineNumber,this.email,'M','02','02','1958','gdsg','asgag');

      //  this.phoneService.addPhoneDetails(new PhoneModel(this.firstName, this.lastName, this.mobileNumber, this.landLineNumber, this.email, 'M', '12', '02', '1958', 'gdsg', 'asgag'));
        this.phoneService.addPhoneDetails().subscribe(data=>this.errorMessage,error=>console.log("on error"+error),()=>console.log("finsished"));
    }

}

interface dateOfBirth {
    month: String;
    day: String;
    year: String;
}
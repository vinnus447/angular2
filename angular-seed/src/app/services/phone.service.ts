import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PhoneService {
    constructor(private http: Http) {
        console.log('initializing the rest service call...');
    }

    getPhoneDetails() {
        let header = new Headers({ 'Content-Type': 'application/json' });
        //header.append('Access-Control-Allow-Origin', 'http://localhost:8080/');
        // header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // header.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //header.append('Access-Control-Allow-Credentials', 'true');
        //  let header1 = new Headers({ 'Access-Control-Allow-Origin': '*' });
        //   headers.append('Access-Control-Allow-Origin','*');
        let options = new RequestOptions({ headers: header });

        return this.http.get('http://localhost:8080/phoneDetails').map(this.extractData)
            .catch(this.handleError);
    }

    addPhoneDetails(){
console.log("inside add phone details");

         let header = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        //header.append('Access-Control-Allow-Origin', 'http://localhost:8080/');
        // header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // header.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //header.append('Access-Control-Allow-Credentials', 'true');
        //  let header1 = new Headers({ 'Access-Control-Allow-Origin': '*' });
        //   headers.append('Access-Control-Allow-Origin','*');
        let options = new RequestOptions({headers: header });

        let bodyString = JSON.stringify({firstName: 'srinivas',
lastName: 'kanakal1a',
mobileNumber: '94401341739',
landLineNumber: '081842323776',
email: 'abc1@gmail.com',
genter: 'M',
month: 'AUG',
day: '15',
year: '1985',
company: 'rice',
jobTitle: 'Business'});
        
let body = this.serializeObj(bodyString);
      //  console.log(bodyString);
        return this.http.post('http://localhost:8080/phoneDetails', {body} ,options).map(this.extractData).catch(this.handleError);

    }

    private serializeObj(obj) {
    var result = [];
    for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
}

    private extractData(res: Response) {
 console.log("hgjkhgkjjkkjgkjgjgkjg");
        let body = res.json();

        return body || {};
    }


    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
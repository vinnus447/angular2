import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viewHistoryDetails } from './viewhistory.model';
@Component({
  selector: 'app-citr-view-history',
  templateUrl: './citr-view-history.component.html',
  styleUrls: ['./citr-view-history.component.css']
})
export class CitrViewHistoryComponent implements OnInit {

 public viewHistoryList: viewHistoryDetails[] = [new viewHistoryDetails('Attachments', 'Incident', 'IncidentType', 'Agency', 'IncidentStatus', 'DateOccurred'),
  new viewHistoryDetails('Attachments', 'Incident', 'IncidentType', 'Agency', 'IncidentStatus', 'DateOccurred')];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // dashboard(){
  //   this.router.navigate(['dashboard']);
  // }

  createNewIncident(validate) {
    if (validate == 'confirmrequest') {
      var confirmrequest = confirm("Are you sure that you want to create new request ?");
      if (confirmrequest) {
        this.router.navigate(['incidentnotification']);
      }
    }
  }
  dashboard(validate) {
    if (validate == 'confirmdashboard') {
      var confirmdashboard = confirm("Are you sure that you want to go back to the dashboard?");

      if (confirmdashboard) {
        this.router.navigate(['dashboard']);
      }

    }
  }

  expandNextDiv(){
   if( document.getElementById('check').style.display=='inline-flex'){
    document.getElementById('check').style.display='none';
   }else{
    document.getElementById('check').style.display='inline-flex';
   }
  }

  login(validate) {
    if (validate == 'confirmlogout') {
      var confirmlogout = confirm("Are you sure that you want to logout ?");
      if (confirmlogout) {
        this.router.navigate(['login']);
      }

    }

  }

}

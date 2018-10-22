import { Component, OnInit } from '@angular/core';
import { AlertsService} from 'angular-alert-module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(private alerts: AlertsService) { }

  ngOnInit() {
  }

  alert() {
    this.alerts.setMessage('Request place successfully. We will call you back','success');
  }
}

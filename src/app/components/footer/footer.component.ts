import { Component, OnInit } from '@angular/core';
import { AlertsService} from 'angular-alert-module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor(private alerts: AlertsService) { }

  ngOnInit() {
  }

  alert() {
    this.alerts.setMessage('You have subscribed successfully!!!','success');
  }
}

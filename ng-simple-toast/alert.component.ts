import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Message } from './message';

@Component({
  selector: 'app-alert',
  template: `<div [class]="positionClass" *ngIf="messages && messages.length > 0">
                <p *ngFor="let m of messages">
                    <app-message [type]="m.type" [message]="m">{{m.content}}</app-message>
                </p>
            </div>`,
  styles: [
    '.bottom-right {position: fixed;top: auto;bottom: 35px;right: 10px;padding: 15px;z-index: 100000;max-width: 50%;}',
    '.bottom-left {    position: fixed;    top: auto;    bottom: 35px;    left: 10px;    padding: 15px;    z-index: 100000;    max-width: 50%;}',
    '.top-right {    position: fixed;    top: 35px;    bottom: auto;    right: 10px;    padding: 15px;    z-index: 100000;    max-width: 50%;}',
    '.top-left {    position: fixed;    top: 35px;    bottom: auto;    left: 10px;    padding: 15px;    z-index: 100000;    max-width: 50%;}'
  ]
})
export class AlertComponent implements OnInit {
  messages: Message[] = [];
  positionClass = '';

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getMessages().subscribe((message) => {
      this.messages = message;
      this.positionClass = this.alertService.getPositionClass();
    });
  }

}

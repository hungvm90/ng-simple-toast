import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from './alert.component';
import {AlertService} from './alert.service';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, MessageComponent],
  exports: [
    AlertComponent
  ],
  providers: [AlertService]
})
export class AlertModule { }

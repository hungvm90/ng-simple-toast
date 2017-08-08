import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlertService} from "./alert.service";
import {Message} from "./message";

@Component({
    selector: 'app-message',
    template: `<div [class]="'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')" role="alert">
                    <button *ngIf="dismissible" type="button" class="close" aria-label="Close" (click)="closeHandler()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <ng-content></ng-content>
                </div>`
})
export class MessageComponent implements OnInit {

    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of an ×) will be displayed.
     */
    @Input() dismissible: boolean;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
     */
    @Input() type: string;

    @Input() message: Message;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     */
    @Output() close = new EventEmitter();

    constructor(private alertService: AlertService) {
        this.dismissible = true;
        this.type = 'success';
    }

    ngOnInit() {
    }

    closeHandler() {
        this.alertService.dismiss(this.message.id);
        this.close.emit(undefined);
    }

}

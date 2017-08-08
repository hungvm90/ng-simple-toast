import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Message} from './message';

@Injectable()
export class AlertService {
    private subject = new BehaviorSubject<Message[]>([]);
    private keepAfterNavigationChange = false;
    private messages: Message[] = [];
    private MAX_SIZE = 5;
    private positionClass = 'bottom-right';

    constructor(router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.messages = this.messages.filter(m => m.keepAfterNavigationChange === true);
                this.subject.next(this.messages);
            }
        });
    }

    dismiss(_id: number) {
        if (!_id && _id !== 0) {
            this.messages = [];
        } else {
            this.messages = this.messages.filter(m => m.id !== _id);
        }
        this.subject.next(this.messages);
    }


    private alert(m: Message) {
        this.messages.push(m);
        if (this.messages.length > this.MAX_SIZE) {
            this.messages.shift();
        }
        if (m.timeout) {
            const timeout = m.timeout > 5000 ? m.timeout : 5000;
            setTimeout(() => {this.dismiss(m.id)}, timeout);
        }
        this.subject.next(this.messages);
    }


    success(message: string, timeout = 5, keepAfterNavigationChange = false) {
        const m = new Message('success', message, timeout, keepAfterNavigationChange);
        this.alert(m);
    }

    error(message: string, timeout = 0, keepAfterNavigationChange = false) {
        const m = new Message('danger', message, timeout, keepAfterNavigationChange);
        this.alert(m);
    }

    getMessages(): Observable<any> {
        return this.subject.asObservable();
    }
    //bottom-right, bottom-left, top-right, top-left
    setPositionClass(_value: string) {
        this.positionClass = _value;
    }

    getPositionClass() {
        return this.positionClass;
    }

}

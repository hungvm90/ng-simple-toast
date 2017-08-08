export class Message {
    id: number;
    type: string;
    content: string;
    keepAfterNavigationChange: boolean;
    timeout: number;

    constructor(_type: string, _content: string, _timeout = 0, _kepp = false) {
        this.id = Math.floor(Math.random() * 1000);
        this.type = _type || 'success';
        this.content = _content || '';
        this.keepAfterNavigationChange = _kepp;
        this.timeout = _timeout;
    }
}

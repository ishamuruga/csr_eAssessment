import { Subject } from 'rxjs';
import Message from './vdata-message';

const subject = new Subject();

const MessageService = {
    sendMessage : (message:Message) => {
        subject.next({
            data:message
        });
    },
    clearMessage : () => {
        subject.next({});
    },
    receiveMessage : () => {
        return subject.asObservable();
    }
}

export default MessageService;

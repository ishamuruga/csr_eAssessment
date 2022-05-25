import { Subject,BehaviorSubject, Observable } from "rxjs"

const subject = new BehaviorSubject({
    payload:{},
    ts: new Date(),
    event:""
});

const QueueManager = {
    sendMessage : (pl:any,eventName:string) => {
        subject.next({
            payload:pl,
            ts:new Date(),
            event:eventName
        });
    },
    clearMessage : () => {
        subject.next({
            payload:"",
            ts:new Date(),
            event:"BLANK"
        });
    },
    receiveMessage : ():Observable<any> => {
        return subject.asObservable();
    }

}

export default QueueManager;
class EventEmitter {

    constructor() {
        this._events = new Map();
    }

    on(subject, subscriber) {
        if (!this._events.has(subject))
            this._events.set(subject, []);
        this._events.get(subject).push(subscriber);
    }

    emit(subject, ...arg) {
        if (this._events.has(subject))
            this._events.get(subject).forEach(listener => listener(...arg));
    }
}
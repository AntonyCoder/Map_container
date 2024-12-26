export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(code, description){
        if(!this.errors.has(code)){
            this.errors.set(code, description);
        }
    }

    translate(code){
        if(this.errors.has(code)){
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
}

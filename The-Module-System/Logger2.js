class Logger2{
    constructor(name){
        this.count=0;
        this.name = name;
    }
    log(message){
        this.count++;
        console.log(this.count);
        console.log(`${this.name} - ${message}`);
    }
}
 module.exports = new Logger2("default");
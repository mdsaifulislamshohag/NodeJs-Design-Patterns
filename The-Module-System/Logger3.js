// //export a function as a log
export function log(message){
    console.log(message);
}

// export a constant as a DEFAULT_LEVEL
export const DEFAULT_LEVEL = 'INFO';

//export an object as LEVELS
export const LEVELS={
error:0,
debug:1,
warn:2,
data:3,
info:4,
verbose:5
}

//export a class as a logger3
export class logger3{
constructor(name){
    this.name = name;
}
log(message){
    console.log(message);
}
}

const express = require('express');
const app = express();
const Logger = require('./Logger');
const Logger2 = require('./Logger2')
//const LoggerModule = require('./Logger3')
//import {log} from './Logger3.js'
//const {count, increament} = require('./counter');

app.get('/logger', (req, res) => {
    const dbLogger = new Logger("DB");
    dbLogger.info("MongoDB");
    dbLogger.log("Mysql");
    dbLogger.verbose("Sequelize");
})


app.get('/logger2', (req, res) => {
    Logger2.log("Hello-world");
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`)
}
)

app.get('/logger3', (req, res) => {
      console.log(log);
})
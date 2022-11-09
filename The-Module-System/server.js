const express = require('express');
const app = express();
const Logger = require('./Logger');

app.get('/logger',(req,res)=>{
    const dbLogger = new Logger("DB");
    dbLogger.info("MongoDB");
    dbLogger.log("Mysql");
    dbLogger.verbose("Sequelize");
})

const PORT = process.env.PORT || 5000 
app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`)
}
)
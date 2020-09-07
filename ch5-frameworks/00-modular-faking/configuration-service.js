const configs = require('./app-config.json');

const getLogLevel = () =>{
    return configs.logLevel
}

module.exports ={
    getLogLevel
}

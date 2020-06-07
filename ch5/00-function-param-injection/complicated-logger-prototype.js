const logger = ()=> { }
logger.prototype= {}

logger.prototype.info = (text) =>{
    console.log(`INFO: ${text}`);
}

logger.prototype.debug = (text) =>{
    console.log(`DEBUG: ${text}`);
}

module.exports = logger;


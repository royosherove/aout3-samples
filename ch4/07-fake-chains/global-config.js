const {SimpleLogger} = require("./simple-logger");

const logger = new SimpleLogger();
const getConfig = () => {
    return {
        log: logger
    }
};

module.exports = {
    getConfig
};

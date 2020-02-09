import moment from "moment";

const provider = {
    getDay: () => moment().day()
};

module.exports = {
    provider
};

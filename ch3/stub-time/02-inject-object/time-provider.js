import moment from "moment";

const RealTimeProvider= () =>  {
    this.getDay = () => moment().day()
};

module.exports = {
    RealTimeProvider
};

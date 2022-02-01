import "moment-timezone";
import { enumPeriodicity } from "../../constants/PeriodicityConstants";

const renderPeriod = (periodicity, frequency) => {
  const periods = ["Day", "Week", "Month", "Year"];

  periods.forEach(period => {
    let value = "";
    if (periodicity === enumPeriodicity.period && frequency > 1) {
      value = `in ${frequency} ${period.toLowerCase}s`;
    }
    if (periodicity === enumPeriodicity.period && frequency === 1) {
      value = `in a ${period.toLowerCase}`;
    }
    return value;
  });
};

export default renderPeriod;

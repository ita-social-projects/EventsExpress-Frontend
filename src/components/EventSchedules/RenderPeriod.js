import "moment-timezone";
import { enumPeriodicity } from "../../constants/PeriodicityConstants";

const renderPeriod = (periodicity, frequency) => {
  const periods = ["Day", "Week", "Month", "Year"];

  periods.forEach(period => {
    if (periodicity === enumPeriodicity.period && frequency > 1) {
      return `in ${frequency} ${period.toLowerCase}s`;
    }
    if (periodicity === enumPeriodicity.period && frequency === 1) {
      return `in a ${period.toLowerCase}`;
    }
    return null;
  });
};

export default renderPeriod;

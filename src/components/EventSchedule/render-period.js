import "moment-timezone";
import { ENUM_PERIODICITY } from "../../constants/peridiocitConstants";

const renderPeriod = (periodicity, frequency) => {
  const periods = ["Day", "Week", "Month", "Year"];

  periods.forEach(period => {
    if (periodicity === ENUM_PERIODICITY.period && frequency > 1) {
      return `in ${frequency} ${period.toLowerCase}s`;
    }
    if (periodicity === ENUM_PERIODICITY.period && frequency === 1) {
      return `in a ${period.toLowerCase}`;
    }
    return null;
  });
};

export default renderPeriod;

import "moment-timezone";
import { EVENT_PERIODICITY } from "../../constants/eventConstants";
import { ENUM_PERIODICITY } from "../../constants/peridiocitConstants";

const renderPeriod = (periodicity, frequency) => {
  const periods = ["Day", "Week", "Month", "Year"];

  periods.forEach(period => {
    if (
      periodicity === ENUM_PERIODICITY.period &&
      frequency > EVENT_PERIODICITY
    ) {
      return `in ${frequency} ${period.toLowerCase}s`;
    }
    if (
      periodicity === ENUM_PERIODICITY.period &&
      frequency === EVENT_PERIODICITY
    ) {
      return `in a ${period.toLowerCase}`;
    }
    return null;
  });
};

export default renderPeriod;

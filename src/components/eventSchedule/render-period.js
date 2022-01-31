import "moment-timezone";
import { enumPeriodicity } from "../../constants/PeriodicityConstants";

function renderPeriod(periodicity, frequency) {
  switch (periodicity) {
    case enumPeriodicity.Day && frequency > 1:
      return `in ${frequency} days`;
    case enumPeriodicity.Day && frequency === 1:
      return "in a day";
    case enumPeriodicity.Week && frequency > 1:
      return `in ${frequency} weeks`;
    case enumPeriodicity.Week && frequency === 1:
      return "in a week";
    case enumPeriodicity.Month && frequency > 1:
      return `in ${frequency} months`;
    case enumPeriodicity.Month && frequency === 1:
      return "in a month";
    case enumPeriodicity.Year && frequency > 1:
      return `in ${frequency} years`;
    case enumPeriodicity.Year && frequency === 1:
      return "in a year";
    default:
      return null;
  }
}

export default renderPeriod;
